/* eslint-disable no-undef */
import coralConstants from '../../constants';

const pathbrowser = {
  name: 'Pathbrowser',
  tag: 'PB',
  category: coralConstants.fieldCategories.RESOURCE,
  tagColor: coralConstants.fieldCategoryColors.RESOURCE,
  description: 'Pathbrowser Field',
  id: 'pathbrowser',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'rootPath',
      label: 'Root Path',
      description: '',
      type: 'String',
      required: true,
    },
    {
      id: 'suffix',
      label: 'Suffix',
      description: '',
      type: 'String',
      defaultValue: '.html',
      required: false,
    },
  ],
  src: `<div>
  <label id="label_{id}" class="coral-Form-fieldlabel">{label}</label>
  <div
      class="coral-Form-field"
      name="./linkURL"
      pickersrc="/mnt/overlay/granite/ui/content/coral/foundation/form/pathfield/picker.html?_charset_=utf-8&amp;path={value}&amp;root=%2fcontent&amp;filter=hierarchyNotFile&amp;selectionCount=single"
      labelledby="label_{id}"
      data-foundation-validation="">
      <div
        class="foundation-autocomplete-inputgroupwrapper">
        <div class="coral-InputGroup"
          role="presentation"><input
            is="coral-textfield"
            class="coral-InputGroup-input _coral-Textfield"
            autocomplete="off"
            placeholder=""
            id="{id}"
            aria-labelledby="label_{id}"
            role="combobox"
            variant="default"
            labelledby="label_{id}"><span
            class="coral-InputGroup-button"><button
              is="coral-button"
              title="Open Selection Dialog"
              type="button"
              aria-label="Open Selection Dialog"
              variant="default"
              class="_coral-Button _coral-Button--primary"
              size="M"
              icon="FolderOpenOutline">
              <coral-icon size="S"
                class="_coral-Icon _coral-Icon--sizeS"
                role="img"
                icon="FolderOpenOutline"
                aria-hidden="true">
                <svg focusable="false"
                  aria-hidden="true"
                  class="_coral-Icon--svg _coral-Icon">
                  <use
                    xlink:href="/dist/resources/spectrum-icons.svg#spectrum-icon-18-FolderOpenOutline">
                  </use>
                </svg>
              </coral-icon>
              <coral-button-label
                class="_coral-Button-label">
              </coral-button-label>
            </button></span></div>
      </div>
    </div>
  </div>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/pathbrowser"
    fieldLabel="{label}"
    name="./{id}"
    rootPath="{rootPath}" />`,
};

export default pathbrowser;
