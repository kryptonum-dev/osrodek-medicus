import { defaultContactSubjects } from '../constants/contactSubjects';

const SANITY_API_VERSION = '2023-08-01';
const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.SANITY_DATASET || 'production';
const SANITY_READ_TOKEN = process.env.SANITY_READ_TOKEN || process.env.SANITY_TOKEN;

function normalizeSubjects(subjects) {
  if (!Array.isArray(subjects)) {
    return defaultContactSubjects;
  }

  const normalized = subjects
    .map((subject) => subject?.trim())
    .filter(Boolean);

  return normalized.length > 0 ? normalized : defaultContactSubjects;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ success: false });
  }

  if (!SANITY_PROJECT_ID) {
    return res.status(200).json({ success: true, subjects: defaultContactSubjects });
  }

  const query = encodeURIComponent('*[_type == "contact"][0]{form_Subjects}');
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;
  const headers = {};

  if (SANITY_READ_TOKEN) {
    headers.Authorization = `Bearer ${SANITY_READ_TOKEN}`;
  }

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      return res.status(200).json({ success: true, subjects: defaultContactSubjects });
    }

    const data = await response.json();
    const subjects = normalizeSubjects(data?.result?.form_Subjects);

    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    return res.status(200).json({ success: true, subjects: defaultContactSubjects });
  }
}
