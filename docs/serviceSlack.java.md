# `serviceSlack` Submodule <a name="`serviceSlack` Submodule" id="@cdktf/provider-gitlab.serviceSlack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceSlack <a name="ServiceSlack" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack gitlab_service_slack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_slack.ServiceSlack;

ServiceSlack.Builder.create(Construct scope, java.lang.String id)
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
//  .notifyOnlyDefaultBranch(java.lang.Boolean)
//  .notifyOnlyDefaultBranch(IResolvable)
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
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.webhook">webhook</a></code> | <code>java.lang.String</code> | Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.confidentialIssueChannel">confidentialIssueChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.confidentialNoteChannel">confidentialNoteChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#id ServiceSlack#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.issueChannel">issueChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.mergeRequestChannel">mergeRequestChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.noteChannel">noteChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.notifyOnlyDefaultBranch">notifyOnlyDefaultBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This parameter has been replaced with `branches_to_be_notified`. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.pipelineChannel">pipelineChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.pushChannel">pushChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.tagPushChannel">tagPushChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.wikiPageChannel">wikiPageChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.project"></a>

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#project ServiceSlack#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.webhook"></a>

- *Type:* java.lang.String

Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#webhook ServiceSlack#webhook}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* java.lang.String

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#branches_to_be_notified ServiceSlack#branches_to_be_notified}

---

##### `confidentialIssueChannel`<sup>Optional</sup> <a name="confidentialIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.confidentialIssueChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#confidential_issue_channel ServiceSlack#confidential_issue_channel}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#confidential_issues_events ServiceSlack#confidential_issues_events}

---

##### `confidentialNoteChannel`<sup>Optional</sup> <a name="confidentialNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.confidentialNoteChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#confidential_note_channel ServiceSlack#confidential_note_channel}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#confidential_note_events ServiceSlack#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#id ServiceSlack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issueChannel`<sup>Optional</sup> <a name="issueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.issueChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#issue_channel ServiceSlack#issue_channel}

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.issuesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#issues_events ServiceSlack#issues_events}

---

##### `mergeRequestChannel`<sup>Optional</sup> <a name="mergeRequestChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.mergeRequestChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#merge_request_channel ServiceSlack#merge_request_channel}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#merge_requests_events ServiceSlack#merge_requests_events}

---

##### `noteChannel`<sup>Optional</sup> <a name="noteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.noteChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#note_channel ServiceSlack#note_channel}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.noteEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#note_events ServiceSlack#note_events}

---

##### `notifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.notifyOnlyBrokenPipelines"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#notify_only_broken_pipelines ServiceSlack#notify_only_broken_pipelines}

---

##### `notifyOnlyDefaultBranch`<sup>Optional</sup> <a name="notifyOnlyDefaultBranch" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.notifyOnlyDefaultBranch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This parameter has been replaced with `branches_to_be_notified`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#notify_only_default_branch ServiceSlack#notify_only_default_branch}

---

##### `pipelineChannel`<sup>Optional</sup> <a name="pipelineChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.pipelineChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#pipeline_channel ServiceSlack#pipeline_channel}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.pipelineEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#pipeline_events ServiceSlack#pipeline_events}

---

##### `pushChannel`<sup>Optional</sup> <a name="pushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.pushChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#push_channel ServiceSlack#push_channel}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.pushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#push_events ServiceSlack#push_events}

---

##### `tagPushChannel`<sup>Optional</sup> <a name="tagPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.tagPushChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#tag_push_channel ServiceSlack#tag_push_channel}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.tagPushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#tag_push_events ServiceSlack#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#username ServiceSlack#username}

---

##### `wikiPageChannel`<sup>Optional</sup> <a name="wikiPageChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.wikiPageChannel"></a>

- *Type:* java.lang.String

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#wiki_page_channel ServiceSlack#wiki_page_channel}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.wikiPageEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#wiki_page_events ServiceSlack#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetBranchesToBeNotified">resetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialIssueChannel">resetConfidentialIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialIssuesEvents">resetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialNoteChannel">resetConfidentialNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialNoteEvents">resetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetIssueChannel">resetIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetIssuesEvents">resetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetMergeRequestChannel">resetMergeRequestChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNoteChannel">resetNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNoteEvents">resetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNotifyOnlyBrokenPipelines">resetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNotifyOnlyDefaultBranch">resetNotifyOnlyDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPipelineChannel">resetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPipelineEvents">resetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPushChannel">resetPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetTagPushChannel">resetTagPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetWikiPageChannel">resetWikiPageChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetWikiPageEvents">resetWikiPageEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBranchesToBeNotified` <a name="resetBranchesToBeNotified" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetBranchesToBeNotified"></a>

```java
public void resetBranchesToBeNotified()
```

##### `resetConfidentialIssueChannel` <a name="resetConfidentialIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialIssueChannel"></a>

```java
public void resetConfidentialIssueChannel()
```

##### `resetConfidentialIssuesEvents` <a name="resetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialIssuesEvents"></a>

```java
public void resetConfidentialIssuesEvents()
```

##### `resetConfidentialNoteChannel` <a name="resetConfidentialNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialNoteChannel"></a>

```java
public void resetConfidentialNoteChannel()
```

##### `resetConfidentialNoteEvents` <a name="resetConfidentialNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialNoteEvents"></a>

```java
public void resetConfidentialNoteEvents()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetId"></a>

```java
public void resetId()
```

##### `resetIssueChannel` <a name="resetIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetIssueChannel"></a>

```java
public void resetIssueChannel()
```

##### `resetIssuesEvents` <a name="resetIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetIssuesEvents"></a>

```java
public void resetIssuesEvents()
```

##### `resetMergeRequestChannel` <a name="resetMergeRequestChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetMergeRequestChannel"></a>

```java
public void resetMergeRequestChannel()
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetMergeRequestsEvents"></a>

```java
public void resetMergeRequestsEvents()
```

##### `resetNoteChannel` <a name="resetNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNoteChannel"></a>

```java
public void resetNoteChannel()
```

##### `resetNoteEvents` <a name="resetNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNoteEvents"></a>

```java
public void resetNoteEvents()
```

##### `resetNotifyOnlyBrokenPipelines` <a name="resetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNotifyOnlyBrokenPipelines"></a>

```java
public void resetNotifyOnlyBrokenPipelines()
```

##### `resetNotifyOnlyDefaultBranch` <a name="resetNotifyOnlyDefaultBranch" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNotifyOnlyDefaultBranch"></a>

```java
public void resetNotifyOnlyDefaultBranch()
```

##### `resetPipelineChannel` <a name="resetPipelineChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPipelineChannel"></a>

```java
public void resetPipelineChannel()
```

##### `resetPipelineEvents` <a name="resetPipelineEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPipelineEvents"></a>

```java
public void resetPipelineEvents()
```

##### `resetPushChannel` <a name="resetPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPushChannel"></a>

```java
public void resetPushChannel()
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPushEvents"></a>

```java
public void resetPushEvents()
```

##### `resetTagPushChannel` <a name="resetTagPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetTagPushChannel"></a>

```java
public void resetTagPushChannel()
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetTagPushEvents"></a>

```java
public void resetTagPushEvents()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetWikiPageChannel` <a name="resetWikiPageChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetWikiPageChannel"></a>

```java
public void resetWikiPageChannel()
```

##### `resetWikiPageEvents` <a name="resetWikiPageEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetWikiPageEvents"></a>

```java
public void resetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceSlack resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_slack.ServiceSlack;

ServiceSlack.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_slack.ServiceSlack;

ServiceSlack.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_slack.ServiceSlack;

ServiceSlack.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_slack.ServiceSlack;

ServiceSlack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceSlack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceSlack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceSlack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceSlack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceSlack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.jobEvents">jobEvents</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.branchesToBeNotifiedInput">branchesToBeNotifiedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssueChannelInput">confidentialIssueChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssuesEventsInput">confidentialIssuesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteChannelInput">confidentialNoteChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteEventsInput">confidentialNoteEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issueChannelInput">issueChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issuesEventsInput">issuesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestChannelInput">mergeRequestChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteChannelInput">noteChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteEventsInput">noteEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyBrokenPipelinesInput">notifyOnlyBrokenPipelinesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyDefaultBranchInput">notifyOnlyDefaultBranchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineChannelInput">pipelineChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineEventsInput">pipelineEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushChannelInput">pushChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushEventsInput">pushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushChannelInput">tagPushChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.webhookInput">webhookInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageChannelInput">wikiPageChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageEventsInput">wikiPageEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssueChannel">confidentialIssueChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteChannel">confidentialNoteChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issueChannel">issueChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestChannel">mergeRequestChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteChannel">noteChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyDefaultBranch">notifyOnlyDefaultBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineChannel">pipelineChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushChannel">pushChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushChannel">tagPushChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.webhook">webhook</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageChannel">wikiPageChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobEvents`<sup>Required</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.jobEvents"></a>

```java
public IResolvable getJobEvents();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `branchesToBeNotifiedInput`<sup>Optional</sup> <a name="branchesToBeNotifiedInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.branchesToBeNotifiedInput"></a>

```java
public java.lang.String getBranchesToBeNotifiedInput();
```

- *Type:* java.lang.String

---

##### `confidentialIssueChannelInput`<sup>Optional</sup> <a name="confidentialIssueChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssueChannelInput"></a>

```java
public java.lang.String getConfidentialIssueChannelInput();
```

- *Type:* java.lang.String

---

##### `confidentialIssuesEventsInput`<sup>Optional</sup> <a name="confidentialIssuesEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssuesEventsInput"></a>

```java
public java.lang.Object getConfidentialIssuesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteChannelInput`<sup>Optional</sup> <a name="confidentialNoteChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteChannelInput"></a>

```java
public java.lang.String getConfidentialNoteChannelInput();
```

- *Type:* java.lang.String

---

##### `confidentialNoteEventsInput`<sup>Optional</sup> <a name="confidentialNoteEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteEventsInput"></a>

```java
public java.lang.Object getConfidentialNoteEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issueChannelInput`<sup>Optional</sup> <a name="issueChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issueChannelInput"></a>

```java
public java.lang.String getIssueChannelInput();
```

- *Type:* java.lang.String

---

##### `issuesEventsInput`<sup>Optional</sup> <a name="issuesEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issuesEventsInput"></a>

```java
public java.lang.Object getIssuesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestChannelInput`<sup>Optional</sup> <a name="mergeRequestChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestChannelInput"></a>

```java
public java.lang.String getMergeRequestChannelInput();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestsEventsInput"></a>

```java
public java.lang.Object getMergeRequestsEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noteChannelInput`<sup>Optional</sup> <a name="noteChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteChannelInput"></a>

```java
public java.lang.String getNoteChannelInput();
```

- *Type:* java.lang.String

---

##### `noteEventsInput`<sup>Optional</sup> <a name="noteEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteEventsInput"></a>

```java
public java.lang.Object getNoteEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyBrokenPipelinesInput"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelinesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyOnlyDefaultBranchInput`<sup>Optional</sup> <a name="notifyOnlyDefaultBranchInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyDefaultBranchInput"></a>

```java
public java.lang.Object getNotifyOnlyDefaultBranchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipelineChannelInput`<sup>Optional</sup> <a name="pipelineChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineChannelInput"></a>

```java
public java.lang.String getPipelineChannelInput();
```

- *Type:* java.lang.String

---

##### `pipelineEventsInput`<sup>Optional</sup> <a name="pipelineEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineEventsInput"></a>

```java
public java.lang.Object getPipelineEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushChannelInput`<sup>Optional</sup> <a name="pushChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushChannelInput"></a>

```java
public java.lang.String getPushChannelInput();
```

- *Type:* java.lang.String

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushEventsInput"></a>

```java
public java.lang.Object getPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushChannelInput`<sup>Optional</sup> <a name="tagPushChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushChannelInput"></a>

```java
public java.lang.String getTagPushChannelInput();
```

- *Type:* java.lang.String

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushEventsInput"></a>

```java
public java.lang.Object getTagPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.webhookInput"></a>

```java
public java.lang.String getWebhookInput();
```

- *Type:* java.lang.String

---

##### `wikiPageChannelInput`<sup>Optional</sup> <a name="wikiPageChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageChannelInput"></a>

```java
public java.lang.String getWikiPageChannelInput();
```

- *Type:* java.lang.String

---

##### `wikiPageEventsInput`<sup>Optional</sup> <a name="wikiPageEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageEventsInput"></a>

```java
public java.lang.Object getWikiPageEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branchesToBeNotified`<sup>Required</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.branchesToBeNotified"></a>

```java
public java.lang.String getBranchesToBeNotified();
```

- *Type:* java.lang.String

---

##### `confidentialIssueChannel`<sup>Required</sup> <a name="confidentialIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssueChannel"></a>

```java
public java.lang.String getConfidentialIssueChannel();
```

- *Type:* java.lang.String

---

##### `confidentialIssuesEvents`<sup>Required</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssuesEvents"></a>

```java
public java.lang.Object getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteChannel`<sup>Required</sup> <a name="confidentialNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteChannel"></a>

```java
public java.lang.String getConfidentialNoteChannel();
```

- *Type:* java.lang.String

---

##### `confidentialNoteEvents`<sup>Required</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteEvents"></a>

```java
public java.lang.Object getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issueChannel`<sup>Required</sup> <a name="issueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issueChannel"></a>

```java
public java.lang.String getIssueChannel();
```

- *Type:* java.lang.String

---

##### `issuesEvents`<sup>Required</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issuesEvents"></a>

```java
public java.lang.Object getIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestChannel`<sup>Required</sup> <a name="mergeRequestChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestChannel"></a>

```java
public java.lang.String getMergeRequestChannel();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noteChannel`<sup>Required</sup> <a name="noteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteChannel"></a>

```java
public java.lang.String getNoteChannel();
```

- *Type:* java.lang.String

---

##### `noteEvents`<sup>Required</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteEvents"></a>

```java
public java.lang.Object getNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyOnlyBrokenPipelines`<sup>Required</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyBrokenPipelines"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyOnlyDefaultBranch`<sup>Required</sup> <a name="notifyOnlyDefaultBranch" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyDefaultBranch"></a>

```java
public java.lang.Object getNotifyOnlyDefaultBranch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipelineChannel`<sup>Required</sup> <a name="pipelineChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineChannel"></a>

```java
public java.lang.String getPipelineChannel();
```

- *Type:* java.lang.String

---

##### `pipelineEvents`<sup>Required</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineEvents"></a>

```java
public java.lang.Object getPipelineEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pushChannel`<sup>Required</sup> <a name="pushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushChannel"></a>

```java
public java.lang.String getPushChannel();
```

- *Type:* java.lang.String

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushChannel`<sup>Required</sup> <a name="tagPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushChannel"></a>

```java
public java.lang.String getTagPushChannel();
```

- *Type:* java.lang.String

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.webhook"></a>

```java
public java.lang.String getWebhook();
```

- *Type:* java.lang.String

---

##### `wikiPageChannel`<sup>Required</sup> <a name="wikiPageChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageChannel"></a>

```java
public java.lang.String getWikiPageChannel();
```

- *Type:* java.lang.String

---

##### `wikiPageEvents`<sup>Required</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageEvents"></a>

```java
public java.lang.Object getWikiPageEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceSlackConfig <a name="ServiceSlackConfig" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_slack.ServiceSlackConfig;

ServiceSlackConfig.builder()
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
//  .notifyOnlyDefaultBranch(java.lang.Boolean)
//  .notifyOnlyDefaultBranch(IResolvable)
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
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.webhook">webhook</a></code> | <code>java.lang.String</code> | Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialIssueChannel">confidentialIssueChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialNoteChannel">confidentialNoteChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#id ServiceSlack#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.issueChannel">issueChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.mergeRequestChannel">mergeRequestChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.noteChannel">noteChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.notifyOnlyDefaultBranch">notifyOnlyDefaultBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This parameter has been replaced with `branches_to_be_notified`. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pipelineChannel">pipelineChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pushChannel">pushChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.tagPushChannel">tagPushChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.wikiPageChannel">wikiPageChannel</a></code> | <code>java.lang.String</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#project ServiceSlack#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.webhook"></a>

```java
public java.lang.String getWebhook();
```

- *Type:* java.lang.String

Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#webhook ServiceSlack#webhook}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.branchesToBeNotified"></a>

```java
public java.lang.String getBranchesToBeNotified();
```

- *Type:* java.lang.String

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#branches_to_be_notified ServiceSlack#branches_to_be_notified}

---

##### `confidentialIssueChannel`<sup>Optional</sup> <a name="confidentialIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialIssueChannel"></a>

```java
public java.lang.String getConfidentialIssueChannel();
```

- *Type:* java.lang.String

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#confidential_issue_channel ServiceSlack#confidential_issue_channel}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialIssuesEvents"></a>

```java
public java.lang.Object getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#confidential_issues_events ServiceSlack#confidential_issues_events}

---

##### `confidentialNoteChannel`<sup>Optional</sup> <a name="confidentialNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialNoteChannel"></a>

```java
public java.lang.String getConfidentialNoteChannel();
```

- *Type:* java.lang.String

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#confidential_note_channel ServiceSlack#confidential_note_channel}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialNoteEvents"></a>

```java
public java.lang.Object getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#confidential_note_events ServiceSlack#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#id ServiceSlack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issueChannel`<sup>Optional</sup> <a name="issueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.issueChannel"></a>

```java
public java.lang.String getIssueChannel();
```

- *Type:* java.lang.String

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#issue_channel ServiceSlack#issue_channel}

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.issuesEvents"></a>

```java
public java.lang.Object getIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#issues_events ServiceSlack#issues_events}

---

##### `mergeRequestChannel`<sup>Optional</sup> <a name="mergeRequestChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.mergeRequestChannel"></a>

```java
public java.lang.String getMergeRequestChannel();
```

- *Type:* java.lang.String

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#merge_request_channel ServiceSlack#merge_request_channel}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#merge_requests_events ServiceSlack#merge_requests_events}

---

##### `noteChannel`<sup>Optional</sup> <a name="noteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.noteChannel"></a>

```java
public java.lang.String getNoteChannel();
```

- *Type:* java.lang.String

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#note_channel ServiceSlack#note_channel}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.noteEvents"></a>

```java
public java.lang.Object getNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#note_events ServiceSlack#note_events}

---

##### `notifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.notifyOnlyBrokenPipelines"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#notify_only_broken_pipelines ServiceSlack#notify_only_broken_pipelines}

---

##### `notifyOnlyDefaultBranch`<sup>Optional</sup> <a name="notifyOnlyDefaultBranch" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.notifyOnlyDefaultBranch"></a>

```java
public java.lang.Object getNotifyOnlyDefaultBranch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This parameter has been replaced with `branches_to_be_notified`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#notify_only_default_branch ServiceSlack#notify_only_default_branch}

---

##### `pipelineChannel`<sup>Optional</sup> <a name="pipelineChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pipelineChannel"></a>

```java
public java.lang.String getPipelineChannel();
```

- *Type:* java.lang.String

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#pipeline_channel ServiceSlack#pipeline_channel}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pipelineEvents"></a>

```java
public java.lang.Object getPipelineEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#pipeline_events ServiceSlack#pipeline_events}

---

##### `pushChannel`<sup>Optional</sup> <a name="pushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pushChannel"></a>

```java
public java.lang.String getPushChannel();
```

- *Type:* java.lang.String

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#push_channel ServiceSlack#push_channel}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#push_events ServiceSlack#push_events}

---

##### `tagPushChannel`<sup>Optional</sup> <a name="tagPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.tagPushChannel"></a>

```java
public java.lang.String getTagPushChannel();
```

- *Type:* java.lang.String

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#tag_push_channel ServiceSlack#tag_push_channel}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#tag_push_events ServiceSlack#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#username ServiceSlack#username}

---

##### `wikiPageChannel`<sup>Optional</sup> <a name="wikiPageChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.wikiPageChannel"></a>

```java
public java.lang.String getWikiPageChannel();
```

- *Type:* java.lang.String

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#wiki_page_channel ServiceSlack#wiki_page_channel}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.wikiPageEvents"></a>

```java
public java.lang.Object getWikiPageEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/service_slack#wiki_page_events ServiceSlack#wiki_page_events}

---



