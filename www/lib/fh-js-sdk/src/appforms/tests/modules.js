//register modules here

 var modules={
  core:[
  "010-appForm",
  "020-utils",
  "020-utils01fileSystem",
  "020-utils02webcam",
  "021-web",
  "021-web01ajax",
  "030-Store",
  "030-Store01LocalStorage",
  "030-Store02mbaas",
  "030-Store03DataAgent",
  "040-Model",
  "040-Model01config",
  "040-Model02forms",
  "040-Model03Form",
  "040-Model04FileSubmission",
  "040-Model04FileSubmissionDownload",
  "040-Model04FormSubmission",
  "040-Model04FormSubmissionComplete",
  "040-Model04FormSubmissionDownload",
  "040-Model04FormSubmissionStatus",
  "040-Model05Base64FileSubmission",
  "040-Model05submissions",
  "040-Model06Submission",
  "040-Model07Field",
  "040-Model07FieldRadio",
  "040-Model07FieldSelect",
  "040-Model07FieldCheckBox",
  "040-Model07FieldFile",
  "040-Model07FieldMatrix",
  "040-Model07FieldLocation",
  "040-Model07FieldSignature",
  "040-Model08Page",
  "040-Model09fieldValidate",
  "040-Model10uploadManager",
  "040-Model11Rule",
  "040-Model12theme",
  "040-Model12UploadTask",
  "040-Model14Log",
  "050-api",
  "060-RuleEngine"
 ],
 backbone:[
   "040-view00BaseView",
   "040-view00Templates",
   "040-view01form_list",
   "040-view01form_list_item",
   "040-view02field01field",
   "040-view02field03field_camera",
   "040-view02field05field_checkbox",
   "040-view02field09field_email",
   "040-view02field10field_file",
   "040-view02field11field_geo",
   "040-view02field14field_map",
   "040-view02field15field_number",
   "040-view02field17field_phone",
   "040-view02field18field_radio",
   "040-view02field19field_select",
   "040-view02field21field_signature",
   "040-view02field22field_text",
   "040-view02field23field_textarea",
   "040-view02field26sectionBreak",
   "040-view02field27dateTime",
   "040-view02field28url",
   "040-view02field29barcode",
   "040-view02field30sliderNumber",
   "040-view02field31readOnly",
   "040-view03Page",
   "040-view04Form",
   "040-view05fromJson",
   "040-view06Sections",
   "040-view06Steps"
 ]
};

var testData = {"formId" : "52efeb30538082e229000002",
  "adminFormId": "53fdb9c22ab6c0b02a98c302",
  "adminFieldId": "53fdb9d82ab6c0b02a98c304",
  "adminNonAdminFieldId": "53fdb9d82ab6c0b02a98c303",
  "adminPageId": "53fdb9c22ab6c0b02a98c301",
  "formName" : "testForm",
  "pageId": "52efeb30538082e229000001",
  "fieldId" : "52efeb62538082e229000003",
  "fieldIdRadio" : "52efeb62538082e229000004",
  "fieldIdCheckbox" : "52efeb9c538082e229000005",
  "fieldIdFile" : "52efeb9c538082e229000007",
  "fieldIdPhoto": "52efeb9c538082e229000006",
  "fieldIdLocation": "52efeb62538082e229000333",
  "fieldCode" : "code1",
  "themeName" : "appFormsPhase2"
};