import componentsImg from '../src/assets/components.png'
import propsImg from '../src/assets/config.png'
import jsxUiImg from '../src/assets/jsx-ui.png'
import stateImg from '../src/assets/state-mgmt.png'

export const coreConceptsData = [
    {
      image: componentsImg,
      title: 'Components',
      description: 'The Core UI Building Block - compose the user interface by combining multiple componenets',
      alt: 'componentsImgAlt',
    },
    {
        image: jsxUiImg,
        title: 'JsxUI',
        description: 'Return (potentially dynamic) HTML (ish) code to define the actual markup that will be rendered',
        alt: 'jsxUiImgAlt',
      },
      {
        image: propsImg,
        title: 'Props',
        description: 'Make components configurable (and therefore reusable) by passing input data to them',
        alt: 'propsImgAlt',
      },
      {
        image: stateImg,
        title: 'State',
        description: 'React-managed data which, when changed, causes the component to re-render & the UI to update',
        alt: 'stateImgAlt',
      },
  ]