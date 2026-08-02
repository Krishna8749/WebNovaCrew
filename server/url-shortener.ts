const SHORTENER_TIMEOUT_MS = 12000;



async function fetchShortened(serviceUrl: string): Promise<string | null> {

  try {

    const resp = await fetch(serviceUrl, { signal: AbortSignal.timeout(SHORTENER_TIMEOUT_MS) });

    if (!resp.ok) return null;

    const text = (await resp.text()).trim();

    if (!text.startsWith("http://") && !text.startsWith("https://")) return null;

    return text;

  } catch {

    return null;

  }

}



async function shortenViaShrtco(url: string): Promise<string | null> {

  try {

    const resp = await fetch(

      `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`,

      { signal: AbortSignal.timeout(SHORTENER_TIMEOUT_MS) },

    );

    if (!resp.ok) return null;

    const data = (await resp.json()) as { ok?: boolean; result?: { full_short_link?: string } };

    const link = data.result?.full_short_link;

    return link?.startsWith("http") ? link : null;

  } catch {

    return null;

  }

}



async function shortenViaCleanUri(url: string): Promise<string | null> {

  try {

    const resp = await fetch("https://cleanuri.com/api/v1/shorten", {

      method: "POST",

      headers: { "Content-Type": "application/json", Accept: "application/json" },

      body: JSON.stringify({ url }),

      signal: AbortSignal.timeout(SHORTENER_TIMEOUT_MS),

    });

    if (!resp.ok) return null;

    const data = (await resp.json()) as { result_url?: string };

    return data.result_url?.startsWith("http") ? data.result_url : null;

  } catch {

    return null;

  }

}



/** Shorten via free APIs — prefer services with clean redirects for link previews. */

export async function shortenWithFreeRedirect(url: string): Promise<string | null> {

  const encoded = encodeURIComponent(url);



  const shrtco = await shortenViaShrtco(url);

  if (shrtco) return shrtco;



  const cleanUri = await shortenViaCleanUri(url);

  if (cleanUri) return cleanUri;



  const isGd = await fetchShortened(

    `https://is.gd/create.php?format=simple&url=${encoded}`,

  );

  if (isGd) return isGd;



  const tinyUrl = await fetchShortened(

    `https://tinyurl.com/api-create.php?url=${encoded}`,

  );

  if (tinyUrl) return tinyUrl;



  const vGd = await fetchShortened(

    `https://v.gd/create.php?format=simple&url=${encoded}`,

  );

  if (vGd) return vGd;



  return null;

}

