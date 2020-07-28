const root = {
  name: 'Root',
  tag: 'Rt',
  category: 'System',
  description: 'start adding content from here',
  id: 'root',
  hidden: true,
  src: `<coral-dialog-preview class="cq-Dialog _coral-BaseOverlay _coral-Dialog-wrapper cq-dialog-floating is-open" backdrop="none" trackingfeature="aem:sites:components:dialogs:core-components:image:v2" variant="default" role="dialog" aria-labelledby="coral-id-631" closable="off" tabindex="0" open="open" aria-hidden="false" movable="true" style="z-index: 10010;">
          <div handle="topTabCapture" coral-tabcapture="top" tabindex="0" role="presentation"></div>
          <div handle="wrapper">
              <form class="coral-Form--vertical cq-dialog foundation-form foundation-layout-form _coral-Dialog _coral-Dialog--noBackdrop is-open" action="/content/wknd/language-masters/en/magazine/arctic-surfing/_jcr_content/root/container/image" method="post" data-foundation-form-ajax="true" data-cq-dialog-pageeditor="/editor.html/content/wknd/language-masters/en/magazine/arctic-surfing.html" coral-dialog-size="">
                 <div class="_coral-Dialog-header u-coral-openHand" handle="headerWrapper">
                      <div class=" _coral-Dialog-dragZone" handle="dragZone"></div>
                      <coral-dialog-header class="cq-dialog-header _coral-Dialog-title" id="coral-id-631">
                          <div class="cq-dialog-actions u-coral-pullRight"></div>
                          Dialog Preview
                      </coral-dialog-header>
                  </div>
                  <coral-dialog-content id="coral-id-632" class="_coral-Dialog-content">
                      <div class="cq-dialog-content">
                        <droptarget data-accept="fieldset,panel,tabView,tab,datepicker,hidden,numberfield,richtext,textarea,textfield,buttongroup,checkbox,radio,select,switchfield,fileupload,pathbrowser,pathfield,alerthint,anchorbutton,heading," data-name="content" />
                      </div>
                    </form>
                  </div>
                </coral-dialog-content>
            <coral-dialog-footer class="_coral-Dialog-footer">
            </coral-dialog-footer>
        </form>
      </div>
      <div handle="intermediateTabCapture" coral-tabcapture="intermediate" tabindex="0" role="presentation"></div>
      <div handle="bottomTabCapture" coral-tabcapture="bottom" tabindex="0" role="presentation"></div>
  </coral-dialog-preview>`,
  xml: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
  xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
  xmlns:granite="http://www.adobe.com/jcr/granite/1.0"
  xmlns:cq="http://www.day.com/jcr/cq/1.0"
  xmlns:jcr="http://www.jcp.org/jcr/1.0"
  xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
  jcr:primaryType="nt:unstructured"
  jcr:title="Button"
  sling:resourceType="cq/gui/components/authoring/dialog">
  <content
    granite:class="cmp-button__editor"
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/container">
    <items jcr:primaryType="nt:unstructured">
      <droptarget data-name="content" />
    </items>
  </content>
</jcr:root>`,
};

export default root;
