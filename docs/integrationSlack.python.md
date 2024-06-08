# `integrationSlack` Submodule <a name="`integrationSlack` Submodule" id="@cdktf/provider-gitlab.integrationSlack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSlack <a name="IntegrationSlack" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack gitlab_integration_slack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_slack

integrationSlack.IntegrationSlack(
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
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issue_channel: str = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  merge_request_channel: str = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  note_channel: str = None,
  note_events: typing.Union[bool, IResolvable] = None,
  notify_only_broken_pipelines: typing.Union[bool, IResolvable] = None,
  notify_only_default_branch: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.webhook">webhook</a></code> | <code>str</code> | Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.confidentialIssueChannel">confidential_issue_channel</a></code> | <code>str</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#id IntegrationSlack#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.issueChannel">issue_channel</a></code> | <code>str</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.mergeRequestChannel">merge_request_channel</a></code> | <code>str</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.noteChannel">note_channel</a></code> | <code>str</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.notifyOnlyDefaultBranch">notify_only_default_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This parameter has been replaced with `branches_to_be_notified`. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.pipelineChannel">pipeline_channel</a></code> | <code>str</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.pushChannel">push_channel</a></code> | <code>str</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.tagPushChannel">tag_push_channel</a></code> | <code>str</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.username">username</a></code> | <code>str</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.wikiPageChannel">wiki_page_channel</a></code> | <code>str</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#project IntegrationSlack#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.webhook"></a>

- *Type:* str

Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#webhook IntegrationSlack#webhook}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* str

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#branches_to_be_notified IntegrationSlack#branches_to_be_notified}

---

##### `confidential_issue_channel`<sup>Optional</sup> <a name="confidential_issue_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.confidentialIssueChannel"></a>

- *Type:* str

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#confidential_issue_channel IntegrationSlack#confidential_issue_channel}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#confidential_issues_events IntegrationSlack#confidential_issues_events}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#confidential_note_events IntegrationSlack#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#id IntegrationSlack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issue_channel`<sup>Optional</sup> <a name="issue_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.issueChannel"></a>

- *Type:* str

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#issue_channel IntegrationSlack#issue_channel}

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.issuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#issues_events IntegrationSlack#issues_events}

---

##### `merge_request_channel`<sup>Optional</sup> <a name="merge_request_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.mergeRequestChannel"></a>

- *Type:* str

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#merge_request_channel IntegrationSlack#merge_request_channel}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#merge_requests_events IntegrationSlack#merge_requests_events}

---

##### `note_channel`<sup>Optional</sup> <a name="note_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.noteChannel"></a>

- *Type:* str

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#note_channel IntegrationSlack#note_channel}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.noteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#note_events IntegrationSlack#note_events}

---

##### `notify_only_broken_pipelines`<sup>Optional</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.notifyOnlyBrokenPipelines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#notify_only_broken_pipelines IntegrationSlack#notify_only_broken_pipelines}

---

##### `notify_only_default_branch`<sup>Optional</sup> <a name="notify_only_default_branch" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.notifyOnlyDefaultBranch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This parameter has been replaced with `branches_to_be_notified`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#notify_only_default_branch IntegrationSlack#notify_only_default_branch}

---

##### `pipeline_channel`<sup>Optional</sup> <a name="pipeline_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.pipelineChannel"></a>

- *Type:* str

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#pipeline_channel IntegrationSlack#pipeline_channel}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.pipelineEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#pipeline_events IntegrationSlack#pipeline_events}

---

##### `push_channel`<sup>Optional</sup> <a name="push_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.pushChannel"></a>

- *Type:* str

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#push_channel IntegrationSlack#push_channel}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#push_events IntegrationSlack#push_events}

---

##### `tag_push_channel`<sup>Optional</sup> <a name="tag_push_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.tagPushChannel"></a>

- *Type:* str

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#tag_push_channel IntegrationSlack#tag_push_channel}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#tag_push_events IntegrationSlack#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.username"></a>

- *Type:* str

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#username IntegrationSlack#username}

---

##### `wiki_page_channel`<sup>Optional</sup> <a name="wiki_page_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.wikiPageChannel"></a>

- *Type:* str

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#wiki_page_channel IntegrationSlack#wiki_page_channel}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.Initializer.parameter.wikiPageEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#wiki_page_events IntegrationSlack#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetBranchesToBeNotified">reset_branches_to_be_notified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetConfidentialIssueChannel">reset_confidential_issue_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetConfidentialIssuesEvents">reset_confidential_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetConfidentialNoteEvents">reset_confidential_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetIssueChannel">reset_issue_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetIssuesEvents">reset_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetMergeRequestChannel">reset_merge_request_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetMergeRequestsEvents">reset_merge_requests_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetNoteChannel">reset_note_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetNoteEvents">reset_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetNotifyOnlyBrokenPipelines">reset_notify_only_broken_pipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetNotifyOnlyDefaultBranch">reset_notify_only_default_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetPipelineChannel">reset_pipeline_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetPipelineEvents">reset_pipeline_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetPushChannel">reset_push_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetTagPushChannel">reset_tag_push_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetWikiPageChannel">reset_wiki_page_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetWikiPageEvents">reset_wiki_page_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_branches_to_be_notified` <a name="reset_branches_to_be_notified" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetBranchesToBeNotified"></a>

```python
def reset_branches_to_be_notified() -> None
```

##### `reset_confidential_issue_channel` <a name="reset_confidential_issue_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetConfidentialIssueChannel"></a>

```python
def reset_confidential_issue_channel() -> None
```

##### `reset_confidential_issues_events` <a name="reset_confidential_issues_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetConfidentialIssuesEvents"></a>

```python
def reset_confidential_issues_events() -> None
```

##### `reset_confidential_note_events` <a name="reset_confidential_note_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetConfidentialNoteEvents"></a>

```python
def reset_confidential_note_events() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issue_channel` <a name="reset_issue_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetIssueChannel"></a>

```python
def reset_issue_channel() -> None
```

##### `reset_issues_events` <a name="reset_issues_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetIssuesEvents"></a>

```python
def reset_issues_events() -> None
```

##### `reset_merge_request_channel` <a name="reset_merge_request_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetMergeRequestChannel"></a>

```python
def reset_merge_request_channel() -> None
```

##### `reset_merge_requests_events` <a name="reset_merge_requests_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetMergeRequestsEvents"></a>

```python
def reset_merge_requests_events() -> None
```

##### `reset_note_channel` <a name="reset_note_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetNoteChannel"></a>

```python
def reset_note_channel() -> None
```

##### `reset_note_events` <a name="reset_note_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetNoteEvents"></a>

```python
def reset_note_events() -> None
```

##### `reset_notify_only_broken_pipelines` <a name="reset_notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetNotifyOnlyBrokenPipelines"></a>

```python
def reset_notify_only_broken_pipelines() -> None
```

##### `reset_notify_only_default_branch` <a name="reset_notify_only_default_branch" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetNotifyOnlyDefaultBranch"></a>

```python
def reset_notify_only_default_branch() -> None
```

##### `reset_pipeline_channel` <a name="reset_pipeline_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetPipelineChannel"></a>

```python
def reset_pipeline_channel() -> None
```

##### `reset_pipeline_events` <a name="reset_pipeline_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetPipelineEvents"></a>

```python
def reset_pipeline_events() -> None
```

##### `reset_push_channel` <a name="reset_push_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetPushChannel"></a>

```python
def reset_push_channel() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_tag_push_channel` <a name="reset_tag_push_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetTagPushChannel"></a>

```python
def reset_tag_push_channel() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_wiki_page_channel` <a name="reset_wiki_page_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetWikiPageChannel"></a>

```python
def reset_wiki_page_channel() -> None
```

##### `reset_wiki_page_events` <a name="reset_wiki_page_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.resetWikiPageEvents"></a>

```python
def reset_wiki_page_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationSlack resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_slack

integrationSlack.IntegrationSlack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_slack

integrationSlack.IntegrationSlack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_slack

integrationSlack.IntegrationSlack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_slack

integrationSlack.IntegrationSlack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationSlack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationSlack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationSlack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationSlack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.jobEvents">job_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.branchesToBeNotifiedInput">branches_to_be_notified_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialIssueChannelInput">confidential_issue_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialIssuesEventsInput">confidential_issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialNoteEventsInput">confidential_note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.issueChannelInput">issue_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.issuesEventsInput">issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.mergeRequestChannelInput">merge_request_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.mergeRequestsEventsInput">merge_requests_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.noteChannelInput">note_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.noteEventsInput">note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.notifyOnlyBrokenPipelinesInput">notify_only_broken_pipelines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.notifyOnlyDefaultBranchInput">notify_only_default_branch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pipelineChannelInput">pipeline_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pipelineEventsInput">pipeline_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pushChannelInput">push_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tagPushChannelInput">tag_push_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.webhookInput">webhook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.wikiPageChannelInput">wiki_page_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.wikiPageEventsInput">wiki_page_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialIssueChannel">confidential_issue_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.issueChannel">issue_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.mergeRequestChannel">merge_request_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.noteChannel">note_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.notifyOnlyDefaultBranch">notify_only_default_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pipelineChannel">pipeline_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pushChannel">push_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tagPushChannel">tag_push_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.webhook">webhook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.wikiPageChannel">wiki_page_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_events`<sup>Required</sup> <a name="job_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.jobEvents"></a>

```python
job_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `branches_to_be_notified_input`<sup>Optional</sup> <a name="branches_to_be_notified_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.branchesToBeNotifiedInput"></a>

```python
branches_to_be_notified_input: str
```

- *Type:* str

---

##### `confidential_issue_channel_input`<sup>Optional</sup> <a name="confidential_issue_channel_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialIssueChannelInput"></a>

```python
confidential_issue_channel_input: str
```

- *Type:* str

---

##### `confidential_issues_events_input`<sup>Optional</sup> <a name="confidential_issues_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialIssuesEventsInput"></a>

```python
confidential_issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_events_input`<sup>Optional</sup> <a name="confidential_note_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialNoteEventsInput"></a>

```python
confidential_note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issue_channel_input`<sup>Optional</sup> <a name="issue_channel_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.issueChannelInput"></a>

```python
issue_channel_input: str
```

- *Type:* str

---

##### `issues_events_input`<sup>Optional</sup> <a name="issues_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.issuesEventsInput"></a>

```python
issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_request_channel_input`<sup>Optional</sup> <a name="merge_request_channel_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.mergeRequestChannelInput"></a>

```python
merge_request_channel_input: str
```

- *Type:* str

---

##### `merge_requests_events_input`<sup>Optional</sup> <a name="merge_requests_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.mergeRequestsEventsInput"></a>

```python
merge_requests_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `note_channel_input`<sup>Optional</sup> <a name="note_channel_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.noteChannelInput"></a>

```python
note_channel_input: str
```

- *Type:* str

---

##### `note_events_input`<sup>Optional</sup> <a name="note_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.noteEventsInput"></a>

```python
note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_only_broken_pipelines_input`<sup>Optional</sup> <a name="notify_only_broken_pipelines_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.notifyOnlyBrokenPipelinesInput"></a>

```python
notify_only_broken_pipelines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_only_default_branch_input`<sup>Optional</sup> <a name="notify_only_default_branch_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.notifyOnlyDefaultBranchInput"></a>

```python
notify_only_default_branch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_channel_input`<sup>Optional</sup> <a name="pipeline_channel_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pipelineChannelInput"></a>

```python
pipeline_channel_input: str
```

- *Type:* str

---

##### `pipeline_events_input`<sup>Optional</sup> <a name="pipeline_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pipelineEventsInput"></a>

```python
pipeline_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_channel_input`<sup>Optional</sup> <a name="push_channel_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pushChannelInput"></a>

```python
push_channel_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_channel_input`<sup>Optional</sup> <a name="tag_push_channel_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tagPushChannelInput"></a>

```python
tag_push_channel_input: str
```

- *Type:* str

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.webhookInput"></a>

```python
webhook_input: str
```

- *Type:* str

---

##### `wiki_page_channel_input`<sup>Optional</sup> <a name="wiki_page_channel_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.wikiPageChannelInput"></a>

```python
wiki_page_channel_input: str
```

- *Type:* str

---

##### `wiki_page_events_input`<sup>Optional</sup> <a name="wiki_page_events_input" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.wikiPageEventsInput"></a>

```python
wiki_page_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branches_to_be_notified`<sup>Required</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

---

##### `confidential_issue_channel`<sup>Required</sup> <a name="confidential_issue_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialIssueChannel"></a>

```python
confidential_issue_channel: str
```

- *Type:* str

---

##### `confidential_issues_events`<sup>Required</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_events`<sup>Required</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issue_channel`<sup>Required</sup> <a name="issue_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.issueChannel"></a>

```python
issue_channel: str
```

- *Type:* str

---

##### `issues_events`<sup>Required</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_request_channel`<sup>Required</sup> <a name="merge_request_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.mergeRequestChannel"></a>

```python
merge_request_channel: str
```

- *Type:* str

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `note_channel`<sup>Required</sup> <a name="note_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.noteChannel"></a>

```python
note_channel: str
```

- *Type:* str

---

##### `note_events`<sup>Required</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_only_broken_pipelines`<sup>Required</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.notifyOnlyBrokenPipelines"></a>

```python
notify_only_broken_pipelines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_only_default_branch`<sup>Required</sup> <a name="notify_only_default_branch" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.notifyOnlyDefaultBranch"></a>

```python
notify_only_default_branch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_channel`<sup>Required</sup> <a name="pipeline_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pipelineChannel"></a>

```python
pipeline_channel: str
```

- *Type:* str

---

##### `pipeline_events`<sup>Required</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `push_channel`<sup>Required</sup> <a name="push_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pushChannel"></a>

```python
push_channel: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_channel`<sup>Required</sup> <a name="tag_push_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tagPushChannel"></a>

```python
tag_push_channel: str
```

- *Type:* str

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

---

##### `wiki_page_channel`<sup>Required</sup> <a name="wiki_page_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.wikiPageChannel"></a>

```python
wiki_page_channel: str
```

- *Type:* str

---

##### `wiki_page_events`<sup>Required</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSlackConfig <a name="IntegrationSlackConfig" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_slack

integrationSlack.IntegrationSlackConfig(
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
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issue_channel: str = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  merge_request_channel: str = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  note_channel: str = None,
  note_events: typing.Union[bool, IResolvable] = None,
  notify_only_broken_pipelines: typing.Union[bool, IResolvable] = None,
  notify_only_default_branch: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.webhook">webhook</a></code> | <code>str</code> | Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.confidentialIssueChannel">confidential_issue_channel</a></code> | <code>str</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#id IntegrationSlack#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.issueChannel">issue_channel</a></code> | <code>str</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.mergeRequestChannel">merge_request_channel</a></code> | <code>str</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.noteChannel">note_channel</a></code> | <code>str</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.notifyOnlyDefaultBranch">notify_only_default_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This parameter has been replaced with `branches_to_be_notified`. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.pipelineChannel">pipeline_channel</a></code> | <code>str</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.pushChannel">push_channel</a></code> | <code>str</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.tagPushChannel">tag_push_channel</a></code> | <code>str</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.username">username</a></code> | <code>str</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.wikiPageChannel">wiki_page_channel</a></code> | <code>str</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#project IntegrationSlack#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#webhook IntegrationSlack#webhook}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#branches_to_be_notified IntegrationSlack#branches_to_be_notified}

---

##### `confidential_issue_channel`<sup>Optional</sup> <a name="confidential_issue_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.confidentialIssueChannel"></a>

```python
confidential_issue_channel: str
```

- *Type:* str

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#confidential_issue_channel IntegrationSlack#confidential_issue_channel}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#confidential_issues_events IntegrationSlack#confidential_issues_events}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#confidential_note_events IntegrationSlack#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#id IntegrationSlack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issue_channel`<sup>Optional</sup> <a name="issue_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.issueChannel"></a>

```python
issue_channel: str
```

- *Type:* str

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#issue_channel IntegrationSlack#issue_channel}

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#issues_events IntegrationSlack#issues_events}

---

##### `merge_request_channel`<sup>Optional</sup> <a name="merge_request_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.mergeRequestChannel"></a>

```python
merge_request_channel: str
```

- *Type:* str

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#merge_request_channel IntegrationSlack#merge_request_channel}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#merge_requests_events IntegrationSlack#merge_requests_events}

---

##### `note_channel`<sup>Optional</sup> <a name="note_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.noteChannel"></a>

```python
note_channel: str
```

- *Type:* str

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#note_channel IntegrationSlack#note_channel}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#note_events IntegrationSlack#note_events}

---

##### `notify_only_broken_pipelines`<sup>Optional</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.notifyOnlyBrokenPipelines"></a>

```python
notify_only_broken_pipelines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#notify_only_broken_pipelines IntegrationSlack#notify_only_broken_pipelines}

---

##### `notify_only_default_branch`<sup>Optional</sup> <a name="notify_only_default_branch" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.notifyOnlyDefaultBranch"></a>

```python
notify_only_default_branch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This parameter has been replaced with `branches_to_be_notified`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#notify_only_default_branch IntegrationSlack#notify_only_default_branch}

---

##### `pipeline_channel`<sup>Optional</sup> <a name="pipeline_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.pipelineChannel"></a>

```python
pipeline_channel: str
```

- *Type:* str

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#pipeline_channel IntegrationSlack#pipeline_channel}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#pipeline_events IntegrationSlack#pipeline_events}

---

##### `push_channel`<sup>Optional</sup> <a name="push_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.pushChannel"></a>

```python
push_channel: str
```

- *Type:* str

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#push_channel IntegrationSlack#push_channel}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#push_events IntegrationSlack#push_events}

---

##### `tag_push_channel`<sup>Optional</sup> <a name="tag_push_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.tagPushChannel"></a>

```python
tag_push_channel: str
```

- *Type:* str

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#tag_push_channel IntegrationSlack#tag_push_channel}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#tag_push_events IntegrationSlack#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#username IntegrationSlack#username}

---

##### `wiki_page_channel`<sup>Optional</sup> <a name="wiki_page_channel" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.wikiPageChannel"></a>

```python
wiki_page_channel: str
```

- *Type:* str

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#wiki_page_channel IntegrationSlack#wiki_page_channel}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.integrationSlack.IntegrationSlackConfig.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/integration_slack#wiki_page_events IntegrationSlack#wiki_page_events}

---



