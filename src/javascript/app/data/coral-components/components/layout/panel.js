/* eslint-disable no-undef */
import constants from '../../constants';

const panel = {
  name: 'Tab Panel',
  tag: 'TP',
  category: constants.fieldCategories.LAYOUT.name,
  tagColor: constants.fieldCategories.LAYOUT.color,
  description: 'Tab Panel',
  id: 'panel',
  hidden: true,
  fields: [],
  previewOutput: `<coral-panel>
  <coral-panel-content>
    <div class="foundation-layout-util-vmargin">
      <div class="coral-FixedColumn foundation-layout-util-vmargin">
        <div class="coral-FixedColumn-column">
          <div class="coral-Well">
            <drop-target data-name="tabcontent">
            </drop-target>
          </div>
        </div>
      </div>
    </div>
  </coral-panel-content>
</coral-panel>`,
  xmlOutput: '<!-- no output -->',
};

export default panel;
