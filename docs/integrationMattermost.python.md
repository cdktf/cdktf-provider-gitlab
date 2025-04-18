# `integrationMattermost` Submodule <a name="`integrationMattermost` Submodule" id="@cdktf/provider-gitlab.integrationMattermost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMattermost <a name="IntegrationMattermost" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost gitlab_integration_mattermost}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_mattermost

integrationMattermost.IntegrationMattermost(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  webhook: str,
  branches_to_be_notified: str = None,
  confidential_issue_channel: str = None,
  confidential_issues_events: typing.Union[bool, IResolvable] = None,
  confidential_note_channel: str = None,
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issue_channel: str = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  merge_request_channel: str = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  note_channel: str = None,
  note_events: typing.Union[bool, IResolvable] = None,
  notify_only_broken_pipelines: typing.Union[bool, IResolvable] = None,
  pipeline_channel: str = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  push_channel: str = None,
  push_events: typing.Union[bool, IResolvable] = None,
  tag_push_channel: str = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  username: str = None,
  wiki_page_channel: str = None,
  wiki_page_events: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.webhook">webhook</a></code> | <code>str</code> | Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialIssueChannel">confidential_issue_channel</a></code> | <code>str</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialNoteChannel">confidential_note_channel</a></code> | <code>str</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.issueChannel">issue_channel</a></code> | <code>str</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.mergeRequestChannel">merge_request_channel</a></code> | <code>str</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.noteChannel">note_channel</a></code> | <code>str</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pipelineChannel">pipeline_channel</a></code> | <code>str</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pushChannel">push_channel</a></code> | <code>str</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.tagPushChannel">tag_push_channel</a></code> | <code>str</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.username">username</a></code> | <code>str</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.wikiPageChannel">wiki_page_channel</a></code> | <code>str</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#project IntegrationMattermost#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.webhook"></a>

- *Type:* str

Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#webhook IntegrationMattermost#webhook}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* str

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#branches_to_be_notified IntegrationMattermost#branches_to_be_notified}

---

##### `confidential_issue_channel`<sup>Optional</sup> <a name="confidential_issue_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialIssueChannel"></a>

- *Type:* str

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_issue_channel IntegrationMattermost#confidential_issue_channel}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_issues_events IntegrationMattermost#confidential_issues_events}

---

##### `confidential_note_channel`<sup>Optional</sup> <a name="confidential_note_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialNoteChannel"></a>

- *Type:* str

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_note_channel IntegrationMattermost#confidential_note_channel}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_note_events IntegrationMattermost#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issue_channel`<sup>Optional</sup> <a name="issue_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.issueChannel"></a>

- *Type:* str

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#issue_channel IntegrationMattermost#issue_channel}

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.issuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#issues_events IntegrationMattermost#issues_events}

---

##### `merge_request_channel`<sup>Optional</sup> <a name="merge_request_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.mergeRequestChannel"></a>

- *Type:* str

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#merge_request_channel IntegrationMattermost#merge_request_channel}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#merge_requests_events IntegrationMattermost#merge_requests_events}

---

##### `note_channel`<sup>Optional</sup> <a name="note_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.noteChannel"></a>

- *Type:* str

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#note_channel IntegrationMattermost#note_channel}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.noteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#note_events IntegrationMattermost#note_events}

---

##### `notify_only_broken_pipelines`<sup>Optional</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.notifyOnlyBrokenPipelines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#notify_only_broken_pipelines IntegrationMattermost#notify_only_broken_pipelines}

---

##### `pipeline_channel`<sup>Optional</sup> <a name="pipeline_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pipelineChannel"></a>

- *Type:* str

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#pipeline_channel IntegrationMattermost#pipeline_channel}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pipelineEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#pipeline_events IntegrationMattermost#pipeline_events}

---

##### `push_channel`<sup>Optional</sup> <a name="push_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pushChannel"></a>

- *Type:* str

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#push_channel IntegrationMattermost#push_channel}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#push_events IntegrationMattermost#push_events}

---

##### `tag_push_channel`<sup>Optional</sup> <a name="tag_push_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.tagPushChannel"></a>

- *Type:* str

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#tag_push_channel IntegrationMattermost#tag_push_channel}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#tag_push_events IntegrationMattermost#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.username"></a>

- *Type:* str

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#username IntegrationMattermost#username}

---

##### `wiki_page_channel`<sup>Optional</sup> <a name="wiki_page_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.wikiPageChannel"></a>

- *Type:* str

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#wiki_page_channel IntegrationMattermost#wiki_page_channel}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.wikiPageEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#wiki_page_events IntegrationMattermost#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetBranchesToBeNotified">reset_branches_to_be_notified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssueChannel">reset_confidential_issue_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssuesEvents">reset_confidential_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteChannel">reset_confidential_note_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteEvents">reset_confidential_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssueChannel">reset_issue_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssuesEvents">reset_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestChannel">reset_merge_request_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestsEvents">reset_merge_requests_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteChannel">reset_note_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteEvents">reset_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNotifyOnlyBrokenPipelines">reset_notify_only_broken_pipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineChannel">reset_pipeline_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineEvents">reset_pipeline_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushChannel">reset_push_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushChannel">reset_tag_push_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageChannel">reset_wiki_page_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageEvents">reset_wiki_page_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_branches_to_be_notified` <a name="reset_branches_to_be_notified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetBranchesToBeNotified"></a>

```python
def reset_branches_to_be_notified() -> None
```

##### `reset_confidential_issue_channel` <a name="reset_confidential_issue_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssueChannel"></a>

```python
def reset_confidential_issue_channel() -> None
```

##### `reset_confidential_issues_events` <a name="reset_confidential_issues_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssuesEvents"></a>

```python
def reset_confidential_issues_events() -> None
```

##### `reset_confidential_note_channel` <a name="reset_confidential_note_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteChannel"></a>

```python
def reset_confidential_note_channel() -> None
```

##### `reset_confidential_note_events` <a name="reset_confidential_note_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteEvents"></a>

```python
def reset_confidential_note_events() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issue_channel` <a name="reset_issue_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssueChannel"></a>

```python
def reset_issue_channel() -> None
```

##### `reset_issues_events` <a name="reset_issues_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssuesEvents"></a>

```python
def reset_issues_events() -> None
```

##### `reset_merge_request_channel` <a name="reset_merge_request_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestChannel"></a>

```python
def reset_merge_request_channel() -> None
```

##### `reset_merge_requests_events` <a name="reset_merge_requests_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestsEvents"></a>

```python
def reset_merge_requests_events() -> None
```

##### `reset_note_channel` <a name="reset_note_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteChannel"></a>

```python
def reset_note_channel() -> None
```

##### `reset_note_events` <a name="reset_note_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteEvents"></a>

```python
def reset_note_events() -> None
```

##### `reset_notify_only_broken_pipelines` <a name="reset_notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNotifyOnlyBrokenPipelines"></a>

```python
def reset_notify_only_broken_pipelines() -> None
```

##### `reset_pipeline_channel` <a name="reset_pipeline_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineChannel"></a>

```python
def reset_pipeline_channel() -> None
```

##### `reset_pipeline_events` <a name="reset_pipeline_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineEvents"></a>

```python
def reset_pipeline_events() -> None
```

##### `reset_push_channel` <a name="reset_push_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushChannel"></a>

```python
def reset_push_channel() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_tag_push_channel` <a name="reset_tag_push_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushChannel"></a>

```python
def reset_tag_push_channel() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_wiki_page_channel` <a name="reset_wiki_page_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageChannel"></a>

```python
def reset_wiki_page_channel() -> None
```

##### `reset_wiki_page_events` <a name="reset_wiki_page_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageEvents"></a>

```python
def reset_wiki_page_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationMattermost resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_mattermost

integrationMattermost.IntegrationMattermost.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_mattermost

integrationMattermost.IntegrationMattermost.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_mattermost

integrationMattermost.IntegrationMattermost.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_mattermost

integrationMattermost.IntegrationMattermost.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationMattermost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationMattermost to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationMattermost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMattermost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotifiedInput">branches_to_be_notified_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannelInput">confidential_issue_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEventsInput">confidential_issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannelInput">confidential_note_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEventsInput">confidential_note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannelInput">issue_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEventsInput">issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannelInput">merge_request_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEventsInput">merge_requests_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannelInput">note_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEventsInput">note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelinesInput">notify_only_broken_pipelines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannelInput">pipeline_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEventsInput">pipeline_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannelInput">push_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannelInput">tag_push_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhookInput">webhook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannelInput">wiki_page_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEventsInput">wiki_page_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannel">confidential_issue_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannel">confidential_note_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannel">issue_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannel">merge_request_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannel">note_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannel">pipeline_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannel">push_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannel">tag_push_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhook">webhook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannel">wiki_page_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branches_to_be_notified_input`<sup>Optional</sup> <a name="branches_to_be_notified_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotifiedInput"></a>

```python
branches_to_be_notified_input: str
```

- *Type:* str

---

##### `confidential_issue_channel_input`<sup>Optional</sup> <a name="confidential_issue_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannelInput"></a>

```python
confidential_issue_channel_input: str
```

- *Type:* str

---

##### `confidential_issues_events_input`<sup>Optional</sup> <a name="confidential_issues_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEventsInput"></a>

```python
confidential_issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_channel_input`<sup>Optional</sup> <a name="confidential_note_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannelInput"></a>

```python
confidential_note_channel_input: str
```

- *Type:* str

---

##### `confidential_note_events_input`<sup>Optional</sup> <a name="confidential_note_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEventsInput"></a>

```python
confidential_note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issue_channel_input`<sup>Optional</sup> <a name="issue_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannelInput"></a>

```python
issue_channel_input: str
```

- *Type:* str

---

##### `issues_events_input`<sup>Optional</sup> <a name="issues_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEventsInput"></a>

```python
issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_request_channel_input`<sup>Optional</sup> <a name="merge_request_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannelInput"></a>

```python
merge_request_channel_input: str
```

- *Type:* str

---

##### `merge_requests_events_input`<sup>Optional</sup> <a name="merge_requests_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEventsInput"></a>

```python
merge_requests_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `note_channel_input`<sup>Optional</sup> <a name="note_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannelInput"></a>

```python
note_channel_input: str
```

- *Type:* str

---

##### `note_events_input`<sup>Optional</sup> <a name="note_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEventsInput"></a>

```python
note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_only_broken_pipelines_input`<sup>Optional</sup> <a name="notify_only_broken_pipelines_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelinesInput"></a>

```python
notify_only_broken_pipelines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_channel_input`<sup>Optional</sup> <a name="pipeline_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannelInput"></a>

```python
pipeline_channel_input: str
```

- *Type:* str

---

##### `pipeline_events_input`<sup>Optional</sup> <a name="pipeline_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEventsInput"></a>

```python
pipeline_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_channel_input`<sup>Optional</sup> <a name="push_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannelInput"></a>

```python
push_channel_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_channel_input`<sup>Optional</sup> <a name="tag_push_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannelInput"></a>

```python
tag_push_channel_input: str
```

- *Type:* str

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhookInput"></a>

```python
webhook_input: str
```

- *Type:* str

---

##### `wiki_page_channel_input`<sup>Optional</sup> <a name="wiki_page_channel_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannelInput"></a>

```python
wiki_page_channel_input: str
```

- *Type:* str

---

##### `wiki_page_events_input`<sup>Optional</sup> <a name="wiki_page_events_input" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEventsInput"></a>

```python
wiki_page_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branches_to_be_notified`<sup>Required</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

---

##### `confidential_issue_channel`<sup>Required</sup> <a name="confidential_issue_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannel"></a>

```python
confidential_issue_channel: str
```

- *Type:* str

---

##### `confidential_issues_events`<sup>Required</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_channel`<sup>Required</sup> <a name="confidential_note_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannel"></a>

```python
confidential_note_channel: str
```

- *Type:* str

---

##### `confidential_note_events`<sup>Required</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issue_channel`<sup>Required</sup> <a name="issue_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannel"></a>

```python
issue_channel: str
```

- *Type:* str

---

##### `issues_events`<sup>Required</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_request_channel`<sup>Required</sup> <a name="merge_request_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannel"></a>

```python
merge_request_channel: str
```

- *Type:* str

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `note_channel`<sup>Required</sup> <a name="note_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannel"></a>

```python
note_channel: str
```

- *Type:* str

---

##### `note_events`<sup>Required</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_only_broken_pipelines`<sup>Required</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelines"></a>

```python
notify_only_broken_pipelines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_channel`<sup>Required</sup> <a name="pipeline_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannel"></a>

```python
pipeline_channel: str
```

- *Type:* str

---

##### `pipeline_events`<sup>Required</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `push_channel`<sup>Required</sup> <a name="push_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannel"></a>

```python
push_channel: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_channel`<sup>Required</sup> <a name="tag_push_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannel"></a>

```python
tag_push_channel: str
```

- *Type:* str

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

---

##### `wiki_page_channel`<sup>Required</sup> <a name="wiki_page_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannel"></a>

```python
wiki_page_channel: str
```

- *Type:* str

---

##### `wiki_page_events`<sup>Required</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMattermostConfig <a name="IntegrationMattermostConfig" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_mattermost

integrationMattermost.IntegrationMattermostConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  webhook: str,
  branches_to_be_notified: str = None,
  confidential_issue_channel: str = None,
  confidential_issues_events: typing.Union[bool, IResolvable] = None,
  confidential_note_channel: str = None,
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issue_channel: str = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  merge_request_channel: str = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  note_channel: str = None,
  note_events: typing.Union[bool, IResolvable] = None,
  notify_only_broken_pipelines: typing.Union[bool, IResolvable] = None,
  pipeline_channel: str = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  push_channel: str = None,
  push_events: typing.Union[bool, IResolvable] = None,
  tag_push_channel: str = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  username: str = None,
  wiki_page_channel: str = None,
  wiki_page_events: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.webhook">webhook</a></code> | <code>str</code> | Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssueChannel">confidential_issue_channel</a></code> | <code>str</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteChannel">confidential_note_channel</a></code> | <code>str</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issueChannel">issue_channel</a></code> | <code>str</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestChannel">merge_request_channel</a></code> | <code>str</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteChannel">note_channel</a></code> | <code>str</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineChannel">pipeline_channel</a></code> | <code>str</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushChannel">push_channel</a></code> | <code>str</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushChannel">tag_push_channel</a></code> | <code>str</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.username">username</a></code> | <code>str</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageChannel">wiki_page_channel</a></code> | <code>str</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#project IntegrationMattermost#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#webhook IntegrationMattermost#webhook}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#branches_to_be_notified IntegrationMattermost#branches_to_be_notified}

---

##### `confidential_issue_channel`<sup>Optional</sup> <a name="confidential_issue_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssueChannel"></a>

```python
confidential_issue_channel: str
```

- *Type:* str

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_issue_channel IntegrationMattermost#confidential_issue_channel}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_issues_events IntegrationMattermost#confidential_issues_events}

---

##### `confidential_note_channel`<sup>Optional</sup> <a name="confidential_note_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteChannel"></a>

```python
confidential_note_channel: str
```

- *Type:* str

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_note_channel IntegrationMattermost#confidential_note_channel}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_note_events IntegrationMattermost#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issue_channel`<sup>Optional</sup> <a name="issue_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issueChannel"></a>

```python
issue_channel: str
```

- *Type:* str

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#issue_channel IntegrationMattermost#issue_channel}

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#issues_events IntegrationMattermost#issues_events}

---

##### `merge_request_channel`<sup>Optional</sup> <a name="merge_request_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestChannel"></a>

```python
merge_request_channel: str
```

- *Type:* str

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#merge_request_channel IntegrationMattermost#merge_request_channel}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#merge_requests_events IntegrationMattermost#merge_requests_events}

---

##### `note_channel`<sup>Optional</sup> <a name="note_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteChannel"></a>

```python
note_channel: str
```

- *Type:* str

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#note_channel IntegrationMattermost#note_channel}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#note_events IntegrationMattermost#note_events}

---

##### `notify_only_broken_pipelines`<sup>Optional</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.notifyOnlyBrokenPipelines"></a>

```python
notify_only_broken_pipelines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#notify_only_broken_pipelines IntegrationMattermost#notify_only_broken_pipelines}

---

##### `pipeline_channel`<sup>Optional</sup> <a name="pipeline_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineChannel"></a>

```python
pipeline_channel: str
```

- *Type:* str

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#pipeline_channel IntegrationMattermost#pipeline_channel}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#pipeline_events IntegrationMattermost#pipeline_events}

---

##### `push_channel`<sup>Optional</sup> <a name="push_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushChannel"></a>

```python
push_channel: str
```

- *Type:* str

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#push_channel IntegrationMattermost#push_channel}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#push_events IntegrationMattermost#push_events}

---

##### `tag_push_channel`<sup>Optional</sup> <a name="tag_push_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushChannel"></a>

```python
tag_push_channel: str
```

- *Type:* str

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#tag_push_channel IntegrationMattermost#tag_push_channel}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#tag_push_events IntegrationMattermost#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#username IntegrationMattermost#username}

---

##### `wiki_page_channel`<sup>Optional</sup> <a name="wiki_page_channel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageChannel"></a>

```python
wiki_page_channel: str
```

- *Type:* str

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#wiki_page_channel IntegrationMattermost#wiki_page_channel}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#wiki_page_events IntegrationMattermost#wiki_page_events}

---



