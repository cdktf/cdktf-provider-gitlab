# `projectIntegrationJira` Submodule <a name="`projectIntegrationJira` Submodule" id="@cdktf/provider-gitlab.projectIntegrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationJira <a name="ProjectIntegrationJira" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira gitlab_project_integration_jira}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jira

projectIntegrationJira.ProjectIntegrationJira(
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
  api_url: str = None,
  comment_on_event_enabled: typing.Union[bool, IResolvable] = None,
  commit_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issues_enabled: typing.Union[bool, IResolvable] = None,
  jira_auth_type: typing.Union[int, float] = None,
  jira_issue_prefix: str = None,
  jira_issue_regex: str = None,
  jira_issue_transition_automatic: typing.Union[bool, IResolvable] = None,
  jira_issue_transition_id: str = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  project_keys: typing.List[str] = None,
  use_inherited_settings: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.password">password</a></code> | <code>str</code> | The Jira API token, password, or personal access token to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.url">url</a></code> | <code>str</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.apiUrl">api_url</a></code> | <code>str</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.commentOnEventEnabled">comment_on_event_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.commitEvents">commit_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.issuesEnabled">issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable viewing Jira issues in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraAuthType">jira_auth_type</a></code> | <code>typing.Union[int, float]</code> | The authentication method to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssuePrefix">jira_issue_prefix</a></code> | <code>str</code> | Prefix to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueRegex">jira_issue_regex</a></code> | <code>str</code> | Regular expression to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueTransitionAutomatic">jira_issue_transition_automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable automatic issue transitions. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueTransitionId">jira_issue_transition_id</a></code> | <code>str</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.projectKeys">project_keys</a></code> | <code>typing.List[str]</code> | Keys of Jira projects. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to inherit default settings. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.username">username</a></code> | <code>str</code> | The email or username to be used with Jira. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.password"></a>

- *Type:* str

The Jira API token, password, or personal access token to be used with Jira.

When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#password ProjectIntegrationJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#project ProjectIntegrationJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.url"></a>

- *Type:* str

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#url ProjectIntegrationJira#url}

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.apiUrl"></a>

- *Type:* str

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#api_url ProjectIntegrationJira#api_url}

---

##### `comment_on_event_enabled`<sup>Optional</sup> <a name="comment_on_event_enabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.commentOnEventEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#comment_on_event_enabled ProjectIntegrationJira#comment_on_event_enabled}

---

##### `commit_events`<sup>Optional</sup> <a name="commit_events" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.commitEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#commit_events ProjectIntegrationJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issues_enabled`<sup>Optional</sup> <a name="issues_enabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.issuesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable viewing Jira issues in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#issues_enabled ProjectIntegrationJira#issues_enabled}

---

##### `jira_auth_type`<sup>Optional</sup> <a name="jira_auth_type" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraAuthType"></a>

- *Type:* typing.Union[int, float]

The authentication method to be used with Jira.

0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_auth_type ProjectIntegrationJira#jira_auth_type}

---

##### `jira_issue_prefix`<sup>Optional</sup> <a name="jira_issue_prefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssuePrefix"></a>

- *Type:* str

Prefix to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_issue_prefix ProjectIntegrationJira#jira_issue_prefix}

---

##### `jira_issue_regex`<sup>Optional</sup> <a name="jira_issue_regex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueRegex"></a>

- *Type:* str

Regular expression to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_issue_regex ProjectIntegrationJira#jira_issue_regex}

---

##### `jira_issue_transition_automatic`<sup>Optional</sup> <a name="jira_issue_transition_automatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueTransitionAutomatic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable automatic issue transitions.

Takes precedence over jira_issue_transition_id if enabled. Defaults to false. This value cannot be imported, and will not perform drift detection if changed outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_issue_transition_automatic ProjectIntegrationJira#jira_issue_transition_automatic}

---

##### `jira_issue_transition_id`<sup>Optional</sup> <a name="jira_issue_transition_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueTransitionId"></a>

- *Type:* str

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_issue_transition_id ProjectIntegrationJira#jira_issue_transition_id}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#merge_requests_events ProjectIntegrationJira#merge_requests_events}

---

##### `project_keys`<sup>Optional</sup> <a name="project_keys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.projectKeys"></a>

- *Type:* typing.List[str]

Keys of Jira projects.

When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#project_keys ProjectIntegrationJira#project_keys}

---

##### `use_inherited_settings`<sup>Optional</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.useInheritedSettings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#use_inherited_settings ProjectIntegrationJira#use_inherited_settings}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.username"></a>

- *Type:* str

The email or username to be used with Jira.

For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#username ProjectIntegrationJira#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetApiUrl">reset_api_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommentOnEventEnabled">reset_comment_on_event_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommitEvents">reset_commit_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetIssuesEnabled">reset_issues_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraAuthType">reset_jira_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssuePrefix">reset_jira_issue_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueRegex">reset_jira_issue_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionAutomatic">reset_jira_issue_transition_automatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionId">reset_jira_issue_transition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetMergeRequestsEvents">reset_merge_requests_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetProjectKeys">reset_project_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUseInheritedSettings">reset_use_inherited_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_api_url` <a name="reset_api_url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetApiUrl"></a>

```python
def reset_api_url() -> None
```

##### `reset_comment_on_event_enabled` <a name="reset_comment_on_event_enabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommentOnEventEnabled"></a>

```python
def reset_comment_on_event_enabled() -> None
```

##### `reset_commit_events` <a name="reset_commit_events" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommitEvents"></a>

```python
def reset_commit_events() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issues_enabled` <a name="reset_issues_enabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetIssuesEnabled"></a>

```python
def reset_issues_enabled() -> None
```

##### `reset_jira_auth_type` <a name="reset_jira_auth_type" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraAuthType"></a>

```python
def reset_jira_auth_type() -> None
```

##### `reset_jira_issue_prefix` <a name="reset_jira_issue_prefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssuePrefix"></a>

```python
def reset_jira_issue_prefix() -> None
```

##### `reset_jira_issue_regex` <a name="reset_jira_issue_regex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueRegex"></a>

```python
def reset_jira_issue_regex() -> None
```

##### `reset_jira_issue_transition_automatic` <a name="reset_jira_issue_transition_automatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionAutomatic"></a>

```python
def reset_jira_issue_transition_automatic() -> None
```

##### `reset_jira_issue_transition_id` <a name="reset_jira_issue_transition_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionId"></a>

```python
def reset_jira_issue_transition_id() -> None
```

##### `reset_merge_requests_events` <a name="reset_merge_requests_events" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetMergeRequestsEvents"></a>

```python
def reset_merge_requests_events() -> None
```

##### `reset_project_keys` <a name="reset_project_keys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetProjectKeys"></a>

```python
def reset_project_keys() -> None
```

##### `reset_use_inherited_settings` <a name="reset_use_inherited_settings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUseInheritedSettings"></a>

```python
def reset_use_inherited_settings() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectIntegrationJira resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jira

projectIntegrationJira.ProjectIntegrationJira.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jira

projectIntegrationJira.ProjectIntegrationJira.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jira

projectIntegrationJira.ProjectIntegrationJira.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jira

projectIntegrationJira.ProjectIntegrationJira.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectIntegrationJira resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectIntegrationJira to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectIntegrationJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrlInput">api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabledInput">comment_on_event_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEventsInput">commit_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabledInput">issues_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthTypeInput">jira_auth_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefixInput">jira_issue_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegexInput">jira_issue_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomaticInput">jira_issue_transition_automatic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionIdInput">jira_issue_transition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEventsInput">merge_requests_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeysInput">project_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettingsInput">use_inherited_settings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabled">comment_on_event_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEvents">commit_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabled">issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthType">jira_auth_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefix">jira_issue_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegex">jira_issue_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomatic">jira_issue_transition_automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionId">jira_issue_transition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeys">project_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `api_url_input`<sup>Optional</sup> <a name="api_url_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrlInput"></a>

```python
api_url_input: str
```

- *Type:* str

---

##### `comment_on_event_enabled_input`<sup>Optional</sup> <a name="comment_on_event_enabled_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabledInput"></a>

```python
comment_on_event_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_events_input`<sup>Optional</sup> <a name="commit_events_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEventsInput"></a>

```python
commit_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issues_enabled_input`<sup>Optional</sup> <a name="issues_enabled_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabledInput"></a>

```python
issues_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_auth_type_input`<sup>Optional</sup> <a name="jira_auth_type_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthTypeInput"></a>

```python
jira_auth_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `jira_issue_prefix_input`<sup>Optional</sup> <a name="jira_issue_prefix_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefixInput"></a>

```python
jira_issue_prefix_input: str
```

- *Type:* str

---

##### `jira_issue_regex_input`<sup>Optional</sup> <a name="jira_issue_regex_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegexInput"></a>

```python
jira_issue_regex_input: str
```

- *Type:* str

---

##### `jira_issue_transition_automatic_input`<sup>Optional</sup> <a name="jira_issue_transition_automatic_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomaticInput"></a>

```python
jira_issue_transition_automatic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_issue_transition_id_input`<sup>Optional</sup> <a name="jira_issue_transition_id_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionIdInput"></a>

```python
jira_issue_transition_id_input: str
```

- *Type:* str

---

##### `merge_requests_events_input`<sup>Optional</sup> <a name="merge_requests_events_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEventsInput"></a>

```python
merge_requests_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_keys_input`<sup>Optional</sup> <a name="project_keys_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeysInput"></a>

```python
project_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `use_inherited_settings_input`<sup>Optional</sup> <a name="use_inherited_settings_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettingsInput"></a>

```python
use_inherited_settings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `comment_on_event_enabled`<sup>Required</sup> <a name="comment_on_event_enabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabled"></a>

```python
comment_on_event_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_events`<sup>Required</sup> <a name="commit_events" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEvents"></a>

```python
commit_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issues_enabled`<sup>Required</sup> <a name="issues_enabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabled"></a>

```python
issues_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_auth_type`<sup>Required</sup> <a name="jira_auth_type" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthType"></a>

```python
jira_auth_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `jira_issue_prefix`<sup>Required</sup> <a name="jira_issue_prefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefix"></a>

```python
jira_issue_prefix: str
```

- *Type:* str

---

##### `jira_issue_regex`<sup>Required</sup> <a name="jira_issue_regex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegex"></a>

```python
jira_issue_regex: str
```

- *Type:* str

---

##### `jira_issue_transition_automatic`<sup>Required</sup> <a name="jira_issue_transition_automatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomatic"></a>

```python
jira_issue_transition_automatic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_issue_transition_id`<sup>Required</sup> <a name="jira_issue_transition_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionId"></a>

```python
jira_issue_transition_id: str
```

- *Type:* str

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_keys`<sup>Required</sup> <a name="project_keys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeys"></a>

```python
project_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `use_inherited_settings`<sup>Required</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettings"></a>

```python
use_inherited_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationJiraConfig <a name="ProjectIntegrationJiraConfig" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jira

projectIntegrationJira.ProjectIntegrationJiraConfig(
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
  api_url: str = None,
  comment_on_event_enabled: typing.Union[bool, IResolvable] = None,
  commit_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issues_enabled: typing.Union[bool, IResolvable] = None,
  jira_auth_type: typing.Union[int, float] = None,
  jira_issue_prefix: str = None,
  jira_issue_regex: str = None,
  jira_issue_transition_automatic: typing.Union[bool, IResolvable] = None,
  jira_issue_transition_id: str = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  project_keys: typing.List[str] = None,
  use_inherited_settings: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.password">password</a></code> | <code>str</code> | The Jira API token, password, or personal access token to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.url">url</a></code> | <code>str</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.apiUrl">api_url</a></code> | <code>str</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commentOnEventEnabled">comment_on_event_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commitEvents">commit_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.issuesEnabled">issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable viewing Jira issues in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraAuthType">jira_auth_type</a></code> | <code>typing.Union[int, float]</code> | The authentication method to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssuePrefix">jira_issue_prefix</a></code> | <code>str</code> | Prefix to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueRegex">jira_issue_regex</a></code> | <code>str</code> | Regular expression to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionAutomatic">jira_issue_transition_automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable automatic issue transitions. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionId">jira_issue_transition_id</a></code> | <code>str</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.projectKeys">project_keys</a></code> | <code>typing.List[str]</code> | Keys of Jira projects. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to inherit default settings. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.username">username</a></code> | <code>str</code> | The email or username to be used with Jira. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The Jira API token, password, or personal access token to be used with Jira.

When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#password ProjectIntegrationJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#project ProjectIntegrationJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#url ProjectIntegrationJira#url}

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#api_url ProjectIntegrationJira#api_url}

---

##### `comment_on_event_enabled`<sup>Optional</sup> <a name="comment_on_event_enabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commentOnEventEnabled"></a>

```python
comment_on_event_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#comment_on_event_enabled ProjectIntegrationJira#comment_on_event_enabled}

---

##### `commit_events`<sup>Optional</sup> <a name="commit_events" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commitEvents"></a>

```python
commit_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#commit_events ProjectIntegrationJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issues_enabled`<sup>Optional</sup> <a name="issues_enabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.issuesEnabled"></a>

```python
issues_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable viewing Jira issues in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#issues_enabled ProjectIntegrationJira#issues_enabled}

---

##### `jira_auth_type`<sup>Optional</sup> <a name="jira_auth_type" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraAuthType"></a>

```python
jira_auth_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The authentication method to be used with Jira.

0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_auth_type ProjectIntegrationJira#jira_auth_type}

---

##### `jira_issue_prefix`<sup>Optional</sup> <a name="jira_issue_prefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssuePrefix"></a>

```python
jira_issue_prefix: str
```

- *Type:* str

Prefix to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_issue_prefix ProjectIntegrationJira#jira_issue_prefix}

---

##### `jira_issue_regex`<sup>Optional</sup> <a name="jira_issue_regex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueRegex"></a>

```python
jira_issue_regex: str
```

- *Type:* str

Regular expression to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_issue_regex ProjectIntegrationJira#jira_issue_regex}

---

##### `jira_issue_transition_automatic`<sup>Optional</sup> <a name="jira_issue_transition_automatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionAutomatic"></a>

```python
jira_issue_transition_automatic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable automatic issue transitions.

Takes precedence over jira_issue_transition_id if enabled. Defaults to false. This value cannot be imported, and will not perform drift detection if changed outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_issue_transition_automatic ProjectIntegrationJira#jira_issue_transition_automatic}

---

##### `jira_issue_transition_id`<sup>Optional</sup> <a name="jira_issue_transition_id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionId"></a>

```python
jira_issue_transition_id: str
```

- *Type:* str

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#jira_issue_transition_id ProjectIntegrationJira#jira_issue_transition_id}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#merge_requests_events ProjectIntegrationJira#merge_requests_events}

---

##### `project_keys`<sup>Optional</sup> <a name="project_keys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.projectKeys"></a>

```python
project_keys: typing.List[str]
```

- *Type:* typing.List[str]

Keys of Jira projects.

When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#project_keys ProjectIntegrationJira#project_keys}

---

##### `use_inherited_settings`<sup>Optional</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.useInheritedSettings"></a>

```python
use_inherited_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#use_inherited_settings ProjectIntegrationJira#use_inherited_settings}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The email or username to be used with Jira.

For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_jira#username ProjectIntegrationJira#username}

---



