interface scrollToOptions {
  offset: number;
}

const defaultScrollToOptions: scrollToOptions = {
  offset: 85
};

/**
 * Scroll to given html element
 * @param id {string} html element id
 * @param options {scrollToOptions} offset
 */
function scrollTo(id: string, options: scrollToOptions = defaultScrollToOptions) {
  const element = document.getElementById(id);
  const offset = options.offset;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top ?? 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

export default scrollTo;
