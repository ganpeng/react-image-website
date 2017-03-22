  const initialState = [
    {
      tagimage: require('../../images/sources/dr/index.jpg'),
      tagName: 'dr',
      imagelist: []
    },
    {
      tagimage: require('../../images/sources/routine/index.jpg'),
      tagName: 'routine',
      imagelist: [
        require("../../images/sources/routine/012e6c48-6025-4280-9ba2-8e08c3cfbad6.jpg"),
        require("../../images/sources/routine/0a871a83-9979-4bef-b674-a347441d27c0.jpg"),
        require("../../images/sources/routine/1036d63b-dd4d-4428-bac8-450784b0280e.png"),
        require("../../images/sources/routine/134865fc-e6e7-4bd7-a681-9505f75303d7.jpg"),
        require("../../images/sources/routine/202e8e89-0b01-4aec-acfb-695bc8b24431.jpg"),
        require("../../images/sources/routine/311268f6-bfa3-4bbb-8056-9a457a15a97e.jpg"),
        require("../../images/sources/routine/3aa62855-adb1-4769-a4e9-16886c0a84e2.jpg"),
        require("../../images/sources/routine/3e013ffd-00cf-409f-9944-95afdbb6e813.jpg"),
        require("../../images/sources/routine/77b1786c-0897-469b-887c-50c3ef30ff6f.jpg"),
        require("../../images/sources/routine/849d7065-bcb0-41e7-bd9c-75ed8df7763f.jpg"),
        require("../../images/sources/routine/89bf1f7c-39e1-4fc7-9b40-861f8a05e5d4.jpg"),
        require("../../images/sources/routine/89e88dea-cc25-4e9a-a085-12e86b6ed66c.jpg"),
        require("../../images/sources/routine/a6547f90-d4c9-44c6-a0ce-275b4e3c4e87.jpg"),
        require("../../images/sources/routine/ae5c0ae8-3c27-4f16-818c-29a2fd0bb302.jpg"),
        require("../../images/sources/routine/d4e19251-e5b9-4b92-8068-b6edfcd16928.png")
      ]
    },
    {
      tagimage: require('../../images/sources/app/index.jpg'),
      tagName: 'app',
      imagelist: [
        require("../../images/sources/app/2e31b422-dbc0-4e06-b2e5-ca5a5cec290b.jpg"),
        require("../../images/sources/app/b5f5fe1d-3a8a-4275-87ec-75ede6cdb3eb.jpg"),
        require("../../images/sources/app/d9fed0c1-92ef-478e-9879-9d4ce55b841f.jpg")
      ]
    },
    {
      tagimage: require('../../images/sources/freehand/index.jpg'),
      tagName: 'freehand',
      imagelist: [
        require("../../images/sources/freehand/0551b7d5-5819-42e9-a570-309522c03c76.png"),
        require("../../images/sources/freehand/33006ec7-3d2b-4ef1-9086-536b70ed3522.jpg"),
        require("../../images/sources/freehand/3370ef36-137d-430a-90d5-2155ebf57172.jpg"),
        require("../../images/sources/freehand/4b11f499-82ae-4d4b-a59d-550d7e1c8a3b.jpg"),
        require("../../images/sources/freehand/8a7e5525-515b-4649-85d0-5950d8c4c0bf.jpg"),
        require("../../images/sources/freehand/8fe57d16-60b5-4d33-b9c4-504b7dc08e0a.jpg"),
        require("../../images/sources/freehand/967d37d4-c1af-4c09-85d1-1ed5d68a662c.jpg"),
        require("../../images/sources/freehand/9744b16a-27f2-45ac-a48d-802903005a46.jpg"),
        require("../../images/sources/freehand/a988ffe6-2a3d-417f-91ee-67afb98c70c9.jpg"),
        require("../../images/sources/freehand/bb2406de-999b-4022-a48d-ebf951900aad.jpg"),
        require("../../images/sources/freehand/c0311e07-8021-4d0e-9dfa-37e358b70585.jpg"),
        require("../../images/sources/freehand/c952cccd-a96d-44f3-8c52-2bffece1f2ac.jpg"),
        require("../../images/sources/freehand/e2df47d4-aa9d-4b4c-a344-38ff57698980.jpg"),
        require("../../images/sources/freehand/f7d25b85-64a2-4964-9495-a603ecb74e97.jpg")
      ]
    },
    {
      tagimage: require('../../images/sources/picture/index.jpg'),
      tagName: 'picture',
      imagelist: [
        require("../../images/sources/picture/0db67c23-2127-4eca-b389-03459c31c658.jpg"),
        require("../../images/sources/picture/34ffa4e3-dc30-4188-a212-e8c1b974b5ba.jpg"),
        require("../../images/sources/picture/3f4108b7-5549-4fe0-b17e-e48153f23888.jpg"),
        require("../../images/sources/picture/4c13d8f5-8d5b-469d-876c-3a95cb9eff94.jpg"),
        require("../../images/sources/picture/5dc47e60-d344-4862-a3de-8afe73bb3c48.jpg"),
        require("../../images/sources/picture/8d8ef30c-d7e2-46d1-908c-6bf2a90b33a2.jpg"),
        require("../../images/sources/picture/a5761232-4699-4bb3-a4c6-731bcc89ac72.jpg"),
        require("../../images/sources/picture/a704b95b-64b3-44af-8dcd-839ba9955fc6.jpg"),
        require("../../images/sources/picture/fd3ab9b8-cf64-4ded-a6e4-5a72fdfc51c1.jpg")
      ]
    },
    {
      tagimage: require('../../images/sources/web/index.jpg'),
      tagName: 'web',
      imagelist: [
        require("../../images/sources/web/78a7c2ec-a97b-40fc-84a6-e60498fdd9f3.png"),
        require("../../images/sources/web/99a8b4ac-f2bb-46f4-91d9-821438c46986.png"),
        require("../../images/sources/web/9cd359da-8019-4393-88c2-893bf8ae651f.png"),
        require("../../images/sources/web/a6e2322e-2d3a-4b5b-b070-da43f25578fe.png")
      ]
    }
  ]


export default (state = initialState, action = {}) => {
  return state;
}


