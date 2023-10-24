# `gitlab_integration_jira`

Refer to the Terraform Registory for docs: [`gitlab_integration_jira`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira).

# `integrationJira` Submodule <a name="`integrationJira` Submodule" id="@cdktf/provider-gitlab.integrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJira <a name="IntegrationJira" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira gitlab_integration_jira}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jira

integrationJira.IntegrationJira(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  password: str,
  project: str,
  url: str,
  username: str,
  api_url: str = None,
  comment_on_event_enabled: typing.Union[bool, IResolvable] = None,
  commit_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  jira_issue_transition_id: str = None,
  job_events: typing.Union[bool, IResolvable] = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  note_events: typing.Union[bool, IResolvable] = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  project_key: str = None,
  push_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.password">password</a></code> | <code>str</code> | The password of the user created to be used with GitLab/JIRA. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.url">url</a></code> | <code>str</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.username">username</a></code> | <code>str</code> | The username of the user created to be used with GitLab/JIRA. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.apiUrl">api_url</a></code> | <code>str</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.commentOnEventEnabled">comment_on_event_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.commitEvents">commit_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#id IntegrationJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.jiraIssueTransitionId">jira_issue_transition_id</a></code> | <code>str</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for job events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.projectKey">project_key</a></code> | <code>str</code> | The short identifier for your JIRA project, all uppercase, e.g., PROJ. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag_push events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.password"></a>

- *Type:* str

The password of the user created to be used with GitLab/JIRA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#password IntegrationJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#project IntegrationJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.url"></a>

- *Type:* str

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#url IntegrationJira#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.username"></a>

- *Type:* str

The username of the user created to be used with GitLab/JIRA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#username IntegrationJira#username}

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.apiUrl"></a>

- *Type:* str

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#api_url IntegrationJira#api_url}

---

##### `comment_on_event_enabled`<sup>Optional</sup> <a name="comment_on_event_enabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.commentOnEventEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#comment_on_event_enabled IntegrationJira#comment_on_event_enabled}

---

##### `commit_events`<sup>Optional</sup> <a name="commit_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.commitEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#commit_events IntegrationJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#id IntegrationJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.issuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#issues_events IntegrationJira#issues_events}

---

##### `jira_issue_transition_id`<sup>Optional</sup> <a name="jira_issue_transition_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.jiraIssueTransitionId"></a>

- *Type:* str

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2. *Note**: importing this field is only supported since GitLab 15.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#jira_issue_transition_id IntegrationJira#jira_issue_transition_id}

---

##### `job_events`<sup>Optional</sup> <a name="job_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.jobEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#job_events IntegrationJira#job_events}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#merge_requests_events IntegrationJira#merge_requests_events}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.noteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#note_events IntegrationJira#note_events}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.pipelineEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#pipeline_events IntegrationJira#pipeline_events}

---

##### `project_key`<sup>Optional</sup> <a name="project_key" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.projectKey"></a>

- *Type:* str

The short identifier for your JIRA project, all uppercase, e.g., PROJ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#project_key IntegrationJira#project_key}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#push_events IntegrationJira#push_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag_push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#tag_push_events IntegrationJira#tag_push_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetApiUrl">reset_api_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetCommentOnEventEnabled">reset_comment_on_event_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetCommitEvents">reset_commit_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetIssuesEvents">reset_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssueTransitionId">reset_jira_issue_transition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJobEvents">reset_job_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetMergeRequestsEvents">reset_merge_requests_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetNoteEvents">reset_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetPipelineEvents">reset_pipeline_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetProjectKey">reset_project_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_api_url` <a name="reset_api_url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetApiUrl"></a>

```python
def reset_api_url() -> None
```

##### `reset_comment_on_event_enabled` <a name="reset_comment_on_event_enabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetCommentOnEventEnabled"></a>

```python
def reset_comment_on_event_enabled() -> None
```

##### `reset_commit_events` <a name="reset_commit_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetCommitEvents"></a>

```python
def reset_commit_events() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issues_events` <a name="reset_issues_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetIssuesEvents"></a>

```python
def reset_issues_events() -> None
```

##### `reset_jira_issue_transition_id` <a name="reset_jira_issue_transition_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssueTransitionId"></a>

```python
def reset_jira_issue_transition_id() -> None
```

##### `reset_job_events` <a name="reset_job_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJobEvents"></a>

```python
def reset_job_events() -> None
```

##### `reset_merge_requests_events` <a name="reset_merge_requests_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetMergeRequestsEvents"></a>

```python
def reset_merge_requests_events() -> None
```

##### `reset_note_events` <a name="reset_note_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetNoteEvents"></a>

```python
def reset_note_events() -> None
```

##### `reset_pipeline_events` <a name="reset_pipeline_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetPipelineEvents"></a>

```python
def reset_pipeline_events() -> None
```

##### `reset_project_key` <a name="reset_project_key" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetProjectKey"></a>

```python
def reset_project_key() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jira

integrationJira.IntegrationJira.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jira

integrationJira.IntegrationJira.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jira

integrationJira.IntegrationJira.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jira

integrationJira.IntegrationJira.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationJira to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.apiUrlInput">api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commentOnEventEnabledInput">comment_on_event_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commitEventsInput">commit_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.issuesEventsInput">issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionIdInput">jira_issue_transition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jobEventsInput">job_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.mergeRequestsEventsInput">merge_requests_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.noteEventsInput">note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.pipelineEventsInput">pipeline_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commentOnEventEnabled">comment_on_event_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commitEvents">commit_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionId">jira_issue_transition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `api_url_input`<sup>Optional</sup> <a name="api_url_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.apiUrlInput"></a>

```python
api_url_input: str
```

- *Type:* str

---

##### `comment_on_event_enabled_input`<sup>Optional</sup> <a name="comment_on_event_enabled_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commentOnEventEnabledInput"></a>

```python
comment_on_event_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_events_input`<sup>Optional</sup> <a name="commit_events_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commitEventsInput"></a>

```python
commit_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issues_events_input`<sup>Optional</sup> <a name="issues_events_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.issuesEventsInput"></a>

```python
issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_issue_transition_id_input`<sup>Optional</sup> <a name="jira_issue_transition_id_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionIdInput"></a>

```python
jira_issue_transition_id_input: str
```

- *Type:* str

---

##### `job_events_input`<sup>Optional</sup> <a name="job_events_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jobEventsInput"></a>

```python
job_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_events_input`<sup>Optional</sup> <a name="merge_requests_events_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.mergeRequestsEventsInput"></a>

```python
merge_requests_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `note_events_input`<sup>Optional</sup> <a name="note_events_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.noteEventsInput"></a>

```python
note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `pipeline_events_input`<sup>Optional</sup> <a name="pipeline_events_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.pipelineEventsInput"></a>

```python
pipeline_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `comment_on_event_enabled`<sup>Required</sup> <a name="comment_on_event_enabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commentOnEventEnabled"></a>

```python
comment_on_event_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_events`<sup>Required</sup> <a name="commit_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commitEvents"></a>

```python
commit_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issues_events`<sup>Required</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_issue_transition_id`<sup>Required</sup> <a name="jira_issue_transition_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionId"></a>

```python
jira_issue_transition_id: str
```

- *Type:* str

---

##### `job_events`<sup>Required</sup> <a name="job_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jobEvents"></a>

```python
job_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `note_events`<sup>Required</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `pipeline_events`<sup>Required</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJiraConfig <a name="IntegrationJiraConfig" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jira

integrationJira.IntegrationJiraConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  password: str,
  project: str,
  url: str,
  username: str,
  api_url: str = None,
  comment_on_event_enabled: typing.Union[bool, IResolvable] = None,
  commit_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  jira_issue_transition_id: str = None,
  job_events: typing.Union[bool, IResolvable] = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  note_events: typing.Union[bool, IResolvable] = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  project_key: str = None,
  push_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.password">password</a></code> | <code>str</code> | The password of the user created to be used with GitLab/JIRA. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.url">url</a></code> | <code>str</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.username">username</a></code> | <code>str</code> | The username of the user created to be used with GitLab/JIRA. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.apiUrl">api_url</a></code> | <code>str</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.commentOnEventEnabled">comment_on_event_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.commitEvents">commit_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#id IntegrationJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssueTransitionId">jira_issue_transition_id</a></code> | <code>str</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for job events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.projectKey">project_key</a></code> | <code>str</code> | The short identifier for your JIRA project, all uppercase, e.g., PROJ. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag_push events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the user created to be used with GitLab/JIRA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#password IntegrationJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#project IntegrationJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#url IntegrationJira#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the user created to be used with GitLab/JIRA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#username IntegrationJira#username}

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#api_url IntegrationJira#api_url}

---

##### `comment_on_event_enabled`<sup>Optional</sup> <a name="comment_on_event_enabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.commentOnEventEnabled"></a>

```python
comment_on_event_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#comment_on_event_enabled IntegrationJira#comment_on_event_enabled}

---

##### `commit_events`<sup>Optional</sup> <a name="commit_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.commitEvents"></a>

```python
commit_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#commit_events IntegrationJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#id IntegrationJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#issues_events IntegrationJira#issues_events}

---

##### `jira_issue_transition_id`<sup>Optional</sup> <a name="jira_issue_transition_id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssueTransitionId"></a>

```python
jira_issue_transition_id: str
```

- *Type:* str

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2. *Note**: importing this field is only supported since GitLab 15.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#jira_issue_transition_id IntegrationJira#jira_issue_transition_id}

---

##### `job_events`<sup>Optional</sup> <a name="job_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jobEvents"></a>

```python
job_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#job_events IntegrationJira#job_events}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#merge_requests_events IntegrationJira#merge_requests_events}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#note_events IntegrationJira#note_events}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#pipeline_events IntegrationJira#pipeline_events}

---

##### `project_key`<sup>Optional</sup> <a name="project_key" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

The short identifier for your JIRA project, all uppercase, e.g., PROJ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#project_key IntegrationJira#project_key}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#push_events IntegrationJira#push_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag_push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/integration_jira#tag_push_events IntegrationJira#tag_push_events}

---



