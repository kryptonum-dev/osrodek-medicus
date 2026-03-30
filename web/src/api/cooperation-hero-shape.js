export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ success: false });
  }

  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || 'production';
  const token = process.env.SANITY_READ_TOKEN || process.env.SANITY_TOKEN;

  if (!projectId) {
    return res.status(200).json({ success: true, disableShape: false });
  }

  const query = encodeURIComponent('*[_type == "cooperation"][0]{hero_DisableShape}');
  const url = `https://${projectId}.api.sanity.io/v2023-08-01/data/query/${dataset}?query=${query}`;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      return res.status(200).json({ success: true, disableShape: false });
    }

    const data = await response.json();

    return res.status(200).json({
      success: true,
      disableShape: Boolean(data?.result?.hero_DisableShape),
    });
  } catch (error) {
    return res.status(200).json({ success: true, disableShape: false });
  }
}
