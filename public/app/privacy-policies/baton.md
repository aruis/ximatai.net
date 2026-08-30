## Baton Agent 支持与隐私政策

生效日期：2026 年 8 月 30 日

### 支持

如需获取 Baton Agent 的使用帮助、反馈问题或咨询隐私相关事项，请发送邮件至 [dev@ximatai.net](mailto:dev@ximatai.net)。

Baton 是已有 Web / Agent 服务的 iPhone Companion，不提供独立的 Agent 后端或账户体系。请仅扫描来自可信网页的 Baton 配对二维码；具体 Conversation、业务数据、登录和权限仍由您接入的网页服务负责。

### 我们处理的信息

- **配对与会话信息**：当您扫描二维码并请求加入会话时，Baton 会向二维码所指向的服务发送设备标识、设备显示名称和一次性设备证明，以完成服务端控制的配对。配对成功后，Baton 使用服务端签发的会话凭据获取和发送该 Conversation 的文本消息。
- **消息内容**：您主动发送的文本，以及服务端向该 Conversation 提供的文本/Markdown 消息，会显示在 App 内。Baton 不在自己的服务器上托管这些 Conversation；接入服务是它们的事实来源，并适用其自身的隐私政策。
- **本地安全存储**：会话凭据、待完成的配对证明和待发送消息仅保存在设备的 iOS Keychain 中。您断开会话后，Baton 会删除本机保存的该会话凭据和待发送消息。
- **相机**：相机仅用于读取网页上展示的 Baton 配对二维码；Baton 不上传扫描画面或照片。
- **麦克风与语音识别**：按住语音输入时，音频仅用于设备本地语音转文字。Baton 不将语音音频发送给您接入的 Conversation 服务；只有您确认或编辑后的文字会作为普通消息发送。

### 网络与第三方服务

Baton 直接连接您扫描二维码所指向的服务。该服务可能收集和处理其 Conversation 所需的信息；请阅读该服务提供者的隐私政策。若服务选择 HTTP 而非 HTTPS，Baton 会在 App 内标记该会话为未加密；建议仅在您信任的网络中使用。

### 数据控制与删除

您可以在 Baton 中断开本机会话，以删除设备保存的会话凭据和待发送消息。要删除 Conversation 历史、撤销网页服务中的访问权限或了解该服务的数据保留方式，请联系对应服务的运营者。

### 政策更新

如本政策发生重要变化，我们会在本页更新生效日期。继续使用 Baton 即表示您理解本政策所述的信息处理方式。

---

## Baton Agent Support and Privacy Policy

Effective date: August 30, 2026

### Support

For help with Baton Agent, bug reports, or privacy questions, email [dev@ximatai.net](mailto:dev@ximatai.net).

Baton is an iPhone companion for existing Web and Agent services. It does not provide an independent Agent backend or account system. Scan Baton pairing QR codes only from websites you trust. The connected web service remains responsible for its Conversation, business data, sign-in, and permissions.

### Information We Process

- **Pairing and session information:** When you scan a QR code and request to join a Conversation, Baton sends a device identifier, device display name, and one-time device proof to the service named by that code. After pairing, Baton uses a server-issued session credential to retrieve and send text messages for that Conversation.
- **Message content:** Text you choose to send, and text or Markdown messages supplied by the connected service, are displayed in the app. Baton does not host these Conversations on its own servers; the connected service is their source of truth and its privacy policy applies.
- **Local secure storage:** Session credentials, pending pairing proof, and queued messages are stored only in the device's iOS Keychain. Disconnecting a conversation removes its locally stored credential and queued messages.
- **Camera:** Camera access is used only to read Baton pairing QR codes displayed on web pages. Baton does not upload the camera view or photos.
- **Microphone and speech recognition:** While you use voice input, audio is used only for on-device speech-to-text. Baton does not send audio to the connected Conversation service; only text that you confirm or edit is sent as a normal message.

### Network and Connected Services

Baton connects directly to the service named by the QR code you scan. That service may process information needed for its Conversation, so please review its privacy policy. If a service uses HTTP rather than HTTPS, Baton labels the conversation as unencrypted; use such services only on networks you trust.

### Your Choices

You can disconnect a locally saved conversation in Baton to remove its credential and queued messages from this device. For deletion of Conversation history, revocation in the web service, or that service's retention practices, contact the service operator.

### Policy Changes

If this policy changes materially, we will update the effective date on this page. Continued use of Baton means you understand the information practices described here.
