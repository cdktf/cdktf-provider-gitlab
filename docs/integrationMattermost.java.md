# `integrationMattermost` Submodule <a name="`integrationMattermost` Submodule" id="@cdktf/provider-gitlab.integrationMattermost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMattermost <a name="IntegrationMattermost" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost gitlab_integration_mattermost}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_mattermost.IntegrationMattermost;

IntegrationMattermost.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .project(java.lang.String)
    .webhook(java.lang.String)
//  .branchesToBeNotified(java.lang.String)
//  .confidentialIssueChannel(java.lang.String)
//  .confidentialIssuesEvents(java.lang.Boolean)
//  .confidentialIssuesEvents(IResolvable)
//  .confidentialNoteChannel(java.lang.String)
//  .confidentialNoteEvents(java.lang.Boolean)
//  .confidentialNoteEvents(IResolvable)
//  .id(java.lang.String)
//  .issueChannel(java.lang.String)
//  .issuesEvents(java.lang.Boolean)
//  .issuesEvents(IResolvable)
//  .mergeRequestChannel(java.lang.String)
//  .mergeRequestsEvents(java.lang.Boolean)
//  .mergeRequestsEvents(IResolvable)
//  .noteChannel(java.lang.String)
//  .noteEvents(java.lang.Boolean)
//  .noteEvents(IResolvable)
//  .notifyOnlyBrokenPipelines(java.lang.Boolean)
//  .notifyOnlyBrokenPipelines(IResolvable)
//  .pipelineChannel(java.lang.String)
//  .pipelineEvents(java.lang.Boolean)
//  .pipelineEvents(IResolvable)
//  .pushChannel(java.lang.String)
//  .pushEvents(java.lang.Boolean)
//  .pushEvents(IResolvable)
//  .tagPushChannel(java.lang.String)
//  .tagPushEvents(java.lang.Boolean)
//  .tagPushEvents(IResolvable)
//  .username(java.lang.String)
//  .wikiPageChannel(java.lang.String)
//  .wikiPageEvents(java.lang.Boolean)
//  .wikiPageEvents(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.webhook">webhook</a></code> | <code>java.lang.String</code> | Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialIssueChannel">confidentialIssueChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialNoteChannel">confidentialNoteChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.issueChannel">issueChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.mergeRequestChannel">mergeRequestChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.noteChannel">noteChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pipelineChannel">pipelineChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pushChannel">pushChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.tagPushChannel">tagPushChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.wikiPageChannel">wikiPageChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.project"></a>

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#project IntegrationMattermost#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.webhook"></a>

- *Type:* java.lang.String

Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#webhook IntegrationMattermost#webhook}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* java.lang.String

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#branches_to_be_notified IntegrationMattermost#branches_to_be_notified}

---

##### `confidentialIssueChannel`<sup>Optional</sup> <a name="confidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialIssueChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#confidential_issue_channel IntegrationMattermost#confidential_issue_channel}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#confidential_issues_events IntegrationMattermost#confidential_issues_events}

---

##### `confidentialNoteChannel`<sup>Optional</sup> <a name="confidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialNoteChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#confidential_note_channel IntegrationMattermost#confidential_note_channel}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#confidential_note_events IntegrationMattermost#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issueChannel`<sup>Optional</sup> <a name="issueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.issueChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#issue_channel IntegrationMattermost#issue_channel}

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.issuesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#issues_events IntegrationMattermost#issues_events}

---

##### `mergeRequestChannel`<sup>Optional</sup> <a name="mergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.mergeRequestChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#merge_request_channel IntegrationMattermost#merge_request_channel}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#merge_requests_events IntegrationMattermost#merge_requests_events}

---

##### `noteChannel`<sup>Optional</sup> <a name="noteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.noteChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#note_channel IntegrationMattermost#note_channel}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.noteEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#note_events IntegrationMattermost#note_events}

---

##### `notifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.notifyOnlyBrokenPipelines"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#notify_only_broken_pipelines IntegrationMattermost#notify_only_broken_pipelines}

---

##### `pipelineChannel`<sup>Optional</sup> <a name="pipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pipelineChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#pipeline_channel IntegrationMattermost#pipeline_channel}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pipelineEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#pipeline_events IntegrationMattermost#pipeline_events}

---

##### `pushChannel`<sup>Optional</sup> <a name="pushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pushChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#push_channel IntegrationMattermost#push_channel}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#push_events IntegrationMattermost#push_events}

---

##### `tagPushChannel`<sup>Optional</sup> <a name="tagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.tagPushChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#tag_push_channel IntegrationMattermost#tag_push_channel}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.tagPushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#tag_push_events IntegrationMattermost#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#username IntegrationMattermost#username}

---

##### `wikiPageChannel`<sup>Optional</sup> <a name="wikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.wikiPageChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#wiki_page_channel IntegrationMattermost#wiki_page_channel}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.wikiPageEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#wiki_page_events IntegrationMattermost#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetBranchesToBeNotified">resetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssueChannel">resetConfidentialIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssuesEvents">resetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteChannel">resetConfidentialNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteEvents">resetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssueChannel">resetIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssuesEvents">resetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestChannel">resetMergeRequestChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteChannel">resetNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteEvents">resetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNotifyOnlyBrokenPipelines">resetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineChannel">resetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineEvents">resetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushChannel">resetPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushChannel">resetTagPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageChannel">resetWikiPageChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageEvents">resetWikiPageEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBranchesToBeNotified` <a name="resetBranchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetBranchesToBeNotified"></a>

```java
public void resetBranchesToBeNotified()
```

##### `resetConfidentialIssueChannel` <a name="resetConfidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssueChannel"></a>

```java
public void resetConfidentialIssueChannel()
```

##### `resetConfidentialIssuesEvents` <a name="resetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssuesEvents"></a>

```java
public void resetConfidentialIssuesEvents()
```

##### `resetConfidentialNoteChannel` <a name="resetConfidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteChannel"></a>

```java
public void resetConfidentialNoteChannel()
```

##### `resetConfidentialNoteEvents` <a name="resetConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteEvents"></a>

```java
public void resetConfidentialNoteEvents()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetId"></a>

```java
public void resetId()
```

##### `resetIssueChannel` <a name="resetIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssueChannel"></a>

```java
public void resetIssueChannel()
```

##### `resetIssuesEvents` <a name="resetIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssuesEvents"></a>

```java
public void resetIssuesEvents()
```

##### `resetMergeRequestChannel` <a name="resetMergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestChannel"></a>

```java
public void resetMergeRequestChannel()
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestsEvents"></a>

```java
public void resetMergeRequestsEvents()
```

##### `resetNoteChannel` <a name="resetNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteChannel"></a>

```java
public void resetNoteChannel()
```

##### `resetNoteEvents` <a name="resetNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteEvents"></a>

```java
public void resetNoteEvents()
```

##### `resetNotifyOnlyBrokenPipelines` <a name="resetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNotifyOnlyBrokenPipelines"></a>

```java
public void resetNotifyOnlyBrokenPipelines()
```

##### `resetPipelineChannel` <a name="resetPipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineChannel"></a>

```java
public void resetPipelineChannel()
```

##### `resetPipelineEvents` <a name="resetPipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineEvents"></a>

```java
public void resetPipelineEvents()
```

##### `resetPushChannel` <a name="resetPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushChannel"></a>

```java
public void resetPushChannel()
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushEvents"></a>

```java
public void resetPushEvents()
```

##### `resetTagPushChannel` <a name="resetTagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushChannel"></a>

```java
public void resetTagPushChannel()
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushEvents"></a>

```java
public void resetTagPushEvents()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetWikiPageChannel` <a name="resetWikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageChannel"></a>

```java
public void resetWikiPageChannel()
```

##### `resetWikiPageEvents` <a name="resetWikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageEvents"></a>

```java
public void resetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationMattermost resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_mattermost.IntegrationMattermost;

IntegrationMattermost.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_mattermost.IntegrationMattermost;

IntegrationMattermost.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_mattermost.IntegrationMattermost;

IntegrationMattermost.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_mattermost.IntegrationMattermost;

IntegrationMattermost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationMattermost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationMattermost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationMattermost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationMattermost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMattermost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotifiedInput">branchesToBeNotifiedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannelInput">confidentialIssueChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEventsInput">confidentialIssuesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannelInput">confidentialNoteChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEventsInput">confidentialNoteEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannelInput">issueChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEventsInput">issuesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannelInput">mergeRequestChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannelInput">noteChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEventsInput">noteEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelinesInput">notifyOnlyBrokenPipelinesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannelInput">pipelineChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEventsInput">pipelineEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannelInput">pushChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEventsInput">pushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannelInput">tagPushChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhookInput">webhookInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannelInput">wikiPageChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEventsInput">wikiPageEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannel">confidentialIssueChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannel">confidentialNoteChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannel">issueChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannel">mergeRequestChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannel">noteChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannel">pipelineChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannel">pushChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannel">tagPushChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhook">webhook</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannel">wikiPageChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branchesToBeNotifiedInput`<sup>Optional</sup> <a name="branchesToBeNotifiedInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotifiedInput"></a>

```java
public java.lang.String getBranchesToBeNotifiedInput();
```

- *Type:* java.lang.String

---

##### `confidentialIssueChannelInput`<sup>Optional</sup> <a name="confidentialIssueChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannelInput"></a>

```java
public java.lang.String getConfidentialIssueChannelInput();
```

- *Type:* java.lang.String

---

##### `confidentialIssuesEventsInput`<sup>Optional</sup> <a name="confidentialIssuesEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEventsInput"></a>

```java
public java.lang.Object getConfidentialIssuesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteChannelInput`<sup>Optional</sup> <a name="confidentialNoteChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannelInput"></a>

```java
public java.lang.String getConfidentialNoteChannelInput();
```

- *Type:* java.lang.String

---

##### `confidentialNoteEventsInput`<sup>Optional</sup> <a name="confidentialNoteEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEventsInput"></a>

```java
public java.lang.Object getConfidentialNoteEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issueChannelInput`<sup>Optional</sup> <a name="issueChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannelInput"></a>

```java
public java.lang.String getIssueChannelInput();
```

- *Type:* java.lang.String

---

##### `issuesEventsInput`<sup>Optional</sup> <a name="issuesEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEventsInput"></a>

```java
public java.lang.Object getIssuesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestChannelInput`<sup>Optional</sup> <a name="mergeRequestChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannelInput"></a>

```java
public java.lang.String getMergeRequestChannelInput();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEventsInput"></a>

```java
public java.lang.Object getMergeRequestsEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noteChannelInput`<sup>Optional</sup> <a name="noteChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannelInput"></a>

```java
public java.lang.String getNoteChannelInput();
```

- *Type:* java.lang.String

---

##### `noteEventsInput`<sup>Optional</sup> <a name="noteEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEventsInput"></a>

```java
public java.lang.Object getNoteEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelinesInput"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelinesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipelineChannelInput`<sup>Optional</sup> <a name="pipelineChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannelInput"></a>

```java
public java.lang.String getPipelineChannelInput();
```

- *Type:* java.lang.String

---

##### `pipelineEventsInput`<sup>Optional</sup> <a name="pipelineEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEventsInput"></a>

```java
public java.lang.Object getPipelineEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushChannelInput`<sup>Optional</sup> <a name="pushChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannelInput"></a>

```java
public java.lang.String getPushChannelInput();
```

- *Type:* java.lang.String

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEventsInput"></a>

```java
public java.lang.Object getPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushChannelInput`<sup>Optional</sup> <a name="tagPushChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannelInput"></a>

```java
public java.lang.String getTagPushChannelInput();
```

- *Type:* java.lang.String

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEventsInput"></a>

```java
public java.lang.Object getTagPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhookInput"></a>

```java
public java.lang.String getWebhookInput();
```

- *Type:* java.lang.String

---

##### `wikiPageChannelInput`<sup>Optional</sup> <a name="wikiPageChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannelInput"></a>

```java
public java.lang.String getWikiPageChannelInput();
```

- *Type:* java.lang.String

---

##### `wikiPageEventsInput`<sup>Optional</sup> <a name="wikiPageEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEventsInput"></a>

```java
public java.lang.Object getWikiPageEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branchesToBeNotified`<sup>Required</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotified"></a>

```java
public java.lang.String getBranchesToBeNotified();
```

- *Type:* java.lang.String

---

##### `confidentialIssueChannel`<sup>Required</sup> <a name="confidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannel"></a>

```java
public java.lang.String getConfidentialIssueChannel();
```

- *Type:* java.lang.String

---

##### `confidentialIssuesEvents`<sup>Required</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEvents"></a>

```java
public java.lang.Object getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteChannel`<sup>Required</sup> <a name="confidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannel"></a>

```java
public java.lang.String getConfidentialNoteChannel();
```

- *Type:* java.lang.String

---

##### `confidentialNoteEvents`<sup>Required</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEvents"></a>

```java
public java.lang.Object getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issueChannel`<sup>Required</sup> <a name="issueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannel"></a>

```java
public java.lang.String getIssueChannel();
```

- *Type:* java.lang.String

---

##### `issuesEvents`<sup>Required</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEvents"></a>

```java
public java.lang.Object getIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestChannel`<sup>Required</sup> <a name="mergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannel"></a>

```java
public java.lang.String getMergeRequestChannel();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noteChannel`<sup>Required</sup> <a name="noteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannel"></a>

```java
public java.lang.String getNoteChannel();
```

- *Type:* java.lang.String

---

##### `noteEvents`<sup>Required</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEvents"></a>

```java
public java.lang.Object getNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyOnlyBrokenPipelines`<sup>Required</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelines"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipelineChannel`<sup>Required</sup> <a name="pipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannel"></a>

```java
public java.lang.String getPipelineChannel();
```

- *Type:* java.lang.String

---

##### `pipelineEvents`<sup>Required</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEvents"></a>

```java
public java.lang.Object getPipelineEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pushChannel`<sup>Required</sup> <a name="pushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannel"></a>

```java
public java.lang.String getPushChannel();
```

- *Type:* java.lang.String

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushChannel`<sup>Required</sup> <a name="tagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannel"></a>

```java
public java.lang.String getTagPushChannel();
```

- *Type:* java.lang.String

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhook"></a>

```java
public java.lang.String getWebhook();
```

- *Type:* java.lang.String

---

##### `wikiPageChannel`<sup>Required</sup> <a name="wikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannel"></a>

```java
public java.lang.String getWikiPageChannel();
```

- *Type:* java.lang.String

---

##### `wikiPageEvents`<sup>Required</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEvents"></a>

```java
public java.lang.Object getWikiPageEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMattermostConfig <a name="IntegrationMattermostConfig" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_mattermost.IntegrationMattermostConfig;

IntegrationMattermostConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .project(java.lang.String)
    .webhook(java.lang.String)
//  .branchesToBeNotified(java.lang.String)
//  .confidentialIssueChannel(java.lang.String)
//  .confidentialIssuesEvents(java.lang.Boolean)
//  .confidentialIssuesEvents(IResolvable)
//  .confidentialNoteChannel(java.lang.String)
//  .confidentialNoteEvents(java.lang.Boolean)
//  .confidentialNoteEvents(IResolvable)
//  .id(java.lang.String)
//  .issueChannel(java.lang.String)
//  .issuesEvents(java.lang.Boolean)
//  .issuesEvents(IResolvable)
//  .mergeRequestChannel(java.lang.String)
//  .mergeRequestsEvents(java.lang.Boolean)
//  .mergeRequestsEvents(IResolvable)
//  .noteChannel(java.lang.String)
//  .noteEvents(java.lang.Boolean)
//  .noteEvents(IResolvable)
//  .notifyOnlyBrokenPipelines(java.lang.Boolean)
//  .notifyOnlyBrokenPipelines(IResolvable)
//  .pipelineChannel(java.lang.String)
//  .pipelineEvents(java.lang.Boolean)
//  .pipelineEvents(IResolvable)
//  .pushChannel(java.lang.String)
//  .pushEvents(java.lang.Boolean)
//  .pushEvents(IResolvable)
//  .tagPushChannel(java.lang.String)
//  .tagPushEvents(java.lang.Boolean)
//  .tagPushEvents(IResolvable)
//  .username(java.lang.String)
//  .wikiPageChannel(java.lang.String)
//  .wikiPageEvents(java.lang.Boolean)
//  .wikiPageEvents(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.webhook">webhook</a></code> | <code>java.lang.String</code> | Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssueChannel">confidentialIssueChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteChannel">confidentialNoteChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issueChannel">issueChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestChannel">mergeRequestChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteChannel">noteChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineChannel">pipelineChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushChannel">pushChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushChannel">tagPushChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageChannel">wikiPageChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#project IntegrationMattermost#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.webhook"></a>

```java
public java.lang.String getWebhook();
```

- *Type:* java.lang.String

Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#webhook IntegrationMattermost#webhook}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.branchesToBeNotified"></a>

```java
public java.lang.String getBranchesToBeNotified();
```

- *Type:* java.lang.String

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#branches_to_be_notified IntegrationMattermost#branches_to_be_notified}

---

##### `confidentialIssueChannel`<sup>Optional</sup> <a name="confidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssueChannel"></a>

```java
public java.lang.String getConfidentialIssueChannel();
```

- *Type:* java.lang.String

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#confidential_issue_channel IntegrationMattermost#confidential_issue_channel}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssuesEvents"></a>

```java
public java.lang.Object getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#confidential_issues_events IntegrationMattermost#confidential_issues_events}

---

##### `confidentialNoteChannel`<sup>Optional</sup> <a name="confidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteChannel"></a>

```java
public java.lang.String getConfidentialNoteChannel();
```

- *Type:* java.lang.String

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#confidential_note_channel IntegrationMattermost#confidential_note_channel}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteEvents"></a>

```java
public java.lang.Object getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#confidential_note_events IntegrationMattermost#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issueChannel`<sup>Optional</sup> <a name="issueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issueChannel"></a>

```java
public java.lang.String getIssueChannel();
```

- *Type:* java.lang.String

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#issue_channel IntegrationMattermost#issue_channel}

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issuesEvents"></a>

```java
public java.lang.Object getIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#issues_events IntegrationMattermost#issues_events}

---

##### `mergeRequestChannel`<sup>Optional</sup> <a name="mergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestChannel"></a>

```java
public java.lang.String getMergeRequestChannel();
```

- *Type:* java.lang.String

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#merge_request_channel IntegrationMattermost#merge_request_channel}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#merge_requests_events IntegrationMattermost#merge_requests_events}

---

##### `noteChannel`<sup>Optional</sup> <a name="noteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteChannel"></a>

```java
public java.lang.String getNoteChannel();
```

- *Type:* java.lang.String

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#note_channel IntegrationMattermost#note_channel}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteEvents"></a>

```java
public java.lang.Object getNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#note_events IntegrationMattermost#note_events}

---

##### `notifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.notifyOnlyBrokenPipelines"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#notify_only_broken_pipelines IntegrationMattermost#notify_only_broken_pipelines}

---

##### `pipelineChannel`<sup>Optional</sup> <a name="pipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineChannel"></a>

```java
public java.lang.String getPipelineChannel();
```

- *Type:* java.lang.String

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#pipeline_channel IntegrationMattermost#pipeline_channel}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineEvents"></a>

```java
public java.lang.Object getPipelineEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#pipeline_events IntegrationMattermost#pipeline_events}

---

##### `pushChannel`<sup>Optional</sup> <a name="pushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushChannel"></a>

```java
public java.lang.String getPushChannel();
```

- *Type:* java.lang.String

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#push_channel IntegrationMattermost#push_channel}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#push_events IntegrationMattermost#push_events}

---

##### `tagPushChannel`<sup>Optional</sup> <a name="tagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushChannel"></a>

```java
public java.lang.String getTagPushChannel();
```

- *Type:* java.lang.String

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#tag_push_channel IntegrationMattermost#tag_push_channel}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#tag_push_events IntegrationMattermost#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#username IntegrationMattermost#username}

---

##### `wikiPageChannel`<sup>Optional</sup> <a name="wikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageChannel"></a>

```java
public java.lang.String getWikiPageChannel();
```

- *Type:* java.lang.String

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#wiki_page_channel IntegrationMattermost#wiki_page_channel}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageEvents"></a>

```java
public java.lang.Object getWikiPageEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_mattermost#wiki_page_events IntegrationMattermost#wiki_page_events}

---



