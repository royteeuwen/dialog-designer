import actionNames from '../actionNames';

const CONTEXTMENU_OPEN_CLASS = 'contextmenu--opened';

const contextmenuMiddleware = (store) => {
  const unselectActiveComponentWrappers = () => {
    [...document.getElementsByClassName(CONTEXTMENU_OPEN_CLASS)]
      .forEach((openedContextmenuField) => {
        openedContextmenuField.classList.remove(CONTEXTMENU_OPEN_CLASS);
      });
    store.dispatch({
      type: actionNames.UI.CONTEXTMENU.CLOSE,
    });
  };

  document.addEventListener('click', (ev) => {
    // optout if no contextmenu is open
    if (!document.getElementsByClassName('contextmenu').length) {
      return;
    }

    // close contextmenu if click outside
    if (ev.target.closest('.contextmenu') === null) {
      unselectActiveComponentWrappers();
    }
  });

  document.getElementById('preview').addEventListener('contextmenu', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    const componentWrapper = ev.target.closest('.has-contextmenu');
    if (!componentWrapper) {
      return;
    }

    unselectActiveComponentWrappers();
    componentWrapper.classList.add(CONTEXTMENU_OPEN_CLASS);
    const { top, left } = componentWrapper.getBoundingClientRect();
    store.dispatch({
      type: actionNames.UI.CONTEXTMENU.OPEN,
      path: componentWrapper.dataset.path,
      x: left,
      y: top - 49,
    });
  });

  return (next) => (action) => {
    if (action.type === actionNames.UI.EDITCOMPONENT.CLOSE) {
      unselectActiveComponentWrappers();
    }

    next(action);
  };
};

export default contextmenuMiddleware;
