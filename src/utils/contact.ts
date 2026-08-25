/** Build a generic mailto link so the device opens its configured email application. */
export function buildMailtoUrl(
  email: string,
  subject = '',
  body = '',
): string {
  const params = new URLSearchParams();

  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);

  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ''}`;
}
