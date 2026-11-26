// Anonymous, cookieless analytics via GoatCounter (probler-portfolio.goatcounter.com).
// The script tag in index.html counts page visits; track() records click events.
export function track(name: string, title?: string) {
  window.goatcounter?.count({ path: name, title: title ?? name, event: true });
}

// "Mohamed_Mahjoub_CV_Software_QA.pdf" -> "cv-software-qa"
export const cvEvent = (file: string) =>
  'cv-' + file.replace(/^.*_CV_/, '').replace(/\.pdf$/i, '').replace(/_/g, '-').toLowerCase();
