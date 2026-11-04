export function scrollToSiteSection(id: string) {
  const target = document.getElementById(id);
  const header = document.querySelector<HTMLElement>("[data-site-chrome]");
  if (!target) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const pin = (behavior: ScrollBehavior) => {
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const top = window.scrollY + target.getBoundingClientRect().top - headerHeight;
    window.scrollTo({ top: Math.max(0, top), behavior });
  };

  pin(reduceMotion ? "auto" : "smooth");

  const settle = () => pin("auto");

  if (reduceMotion) {
    requestAnimationFrame(settle);
    return;
  }

  window.addEventListener("scrollend", settle, { once: true });
  window.setTimeout(settle, 350);
  window.setTimeout(settle, 700);
}