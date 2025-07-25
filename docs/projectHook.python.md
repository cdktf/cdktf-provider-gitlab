# `projectHook` Submodule <a name="`projectHook` Submodule" id="@cdktf/provider-gitlab.projectHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectHook <a name="ProjectHook" id="@cdktf/provider-gitlab.projectHook.ProjectHook"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook gitlab_project_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHook(
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
  url: str,
  confidential_issues_events: typing.Union[bool, IResolvable] = None,
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  custom_headers: typing.Union[IResolvable, typing.List[ProjectHookCustomHeaders]] = None,
  custom_webhook_template: str = None,
  deployment_events: typing.Union[bool, IResolvable] = None,
  description: str = None,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  job_events: typing.Union[bool, IResolvable] = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  name: str = None,
  note_events: typing.Union[bool, IResolvable] = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  push_events: typing.Union[bool, IResolvable] = None,
  push_events_branch_filter: str = None,
  releases_events: typing.Union[bool, IResolvable] = None,
  resource_access_token_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  token: str = None,
  wiki_page_events: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.project">project</a></code> | <code>str</code> | The name or id of the project to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.url">url</a></code> | <code>str</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.customHeaders">custom_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]</code> | Custom headers for the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.customWebhookTemplate">custom_webhook_template</a></code> | <code>str</code> | Custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.deploymentEvents">deployment_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the webhook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable SSL verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pushEventsBranchFilter">push_events_branch_filter</a></code> | <code>str</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.releasesEvents">releases_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for release events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.resourceAccessTokenEvents">resource_access_token_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for project access token expiry events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.token">token</a></code> | <code>str</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.project"></a>

- *Type:* str

The name or id of the project to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#project ProjectHook#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.url"></a>

- *Type:* str

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#url ProjectHook#url}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#confidential_issues_events ProjectHook#confidential_issues_events}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#confidential_note_events ProjectHook#confidential_note_events}

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.customHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]

Custom headers for the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#custom_headers ProjectHook#custom_headers}

---

##### `custom_webhook_template`<sup>Optional</sup> <a name="custom_webhook_template" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.customWebhookTemplate"></a>

- *Type:* str

Custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#custom_webhook_template ProjectHook#custom_webhook_template}

---

##### `deployment_events`<sup>Optional</sup> <a name="deployment_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.deploymentEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#deployment_events ProjectHook#deployment_events}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.description"></a>

- *Type:* str

Description of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#description ProjectHook#description}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.enableSslVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable SSL verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#enable_ssl_verification ProjectHook#enable_ssl_verification}

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.issuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#issues_events ProjectHook#issues_events}

---

##### `job_events`<sup>Optional</sup> <a name="job_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.jobEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#job_events ProjectHook#job_events}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#merge_requests_events ProjectHook#merge_requests_events}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.name"></a>

- *Type:* str

Name of the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#name ProjectHook#name}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.noteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#note_events ProjectHook#note_events}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pipelineEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#pipeline_events ProjectHook#pipeline_events}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#push_events ProjectHook#push_events}

---

##### `push_events_branch_filter`<sup>Optional</sup> <a name="push_events_branch_filter" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pushEventsBranchFilter"></a>

- *Type:* str

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#push_events_branch_filter ProjectHook#push_events_branch_filter}

---

##### `releases_events`<sup>Optional</sup> <a name="releases_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.releasesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for release events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#releases_events ProjectHook#releases_events}

---

##### `resource_access_token_events`<sup>Optional</sup> <a name="resource_access_token_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.resourceAccessTokenEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for project access token expiry events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#resource_access_token_events ProjectHook#resource_access_token_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#tag_push_events ProjectHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.token"></a>

- *Type:* str

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#token ProjectHook#token}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.wikiPageEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#wiki_page_events ProjectHook#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.putCustomHeaders">put_custom_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialIssuesEvents">reset_confidential_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialNoteEvents">reset_confidential_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomHeaders">reset_custom_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomWebhookTemplate">reset_custom_webhook_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetDeploymentEvents">reset_deployment_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetEnableSslVerification">reset_enable_ssl_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetIssuesEvents">reset_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetJobEvents">reset_job_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetMergeRequestsEvents">reset_merge_requests_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetNoteEvents">reset_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPipelineEvents">reset_pipeline_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEventsBranchFilter">reset_push_events_branch_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetReleasesEvents">reset_releases_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetResourceAccessTokenEvents">reset_resource_access_token_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetWikiPageEvents">reset_wiki_page_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectHook.ProjectHook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_headers` <a name="put_custom_headers" id="@cdktf/provider-gitlab.projectHook.ProjectHook.putCustomHeaders"></a>

```python
def put_custom_headers(
  value: typing.Union[IResolvable, typing.List[ProjectHookCustomHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectHook.ProjectHook.putCustomHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]

---

##### `reset_confidential_issues_events` <a name="reset_confidential_issues_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialIssuesEvents"></a>

```python
def reset_confidential_issues_events() -> None
```

##### `reset_confidential_note_events` <a name="reset_confidential_note_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialNoteEvents"></a>

```python
def reset_confidential_note_events() -> None
```

##### `reset_custom_headers` <a name="reset_custom_headers" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomHeaders"></a>

```python
def reset_custom_headers() -> None
```

##### `reset_custom_webhook_template` <a name="reset_custom_webhook_template" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomWebhookTemplate"></a>

```python
def reset_custom_webhook_template() -> None
```

##### `reset_deployment_events` <a name="reset_deployment_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetDeploymentEvents"></a>

```python
def reset_deployment_events() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_ssl_verification` <a name="reset_enable_ssl_verification" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetEnableSslVerification"></a>

```python
def reset_enable_ssl_verification() -> None
```

##### `reset_issues_events` <a name="reset_issues_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetIssuesEvents"></a>

```python
def reset_issues_events() -> None
```

##### `reset_job_events` <a name="reset_job_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetJobEvents"></a>

```python
def reset_job_events() -> None
```

##### `reset_merge_requests_events` <a name="reset_merge_requests_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetMergeRequestsEvents"></a>

```python
def reset_merge_requests_events() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_note_events` <a name="reset_note_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetNoteEvents"></a>

```python
def reset_note_events() -> None
```

##### `reset_pipeline_events` <a name="reset_pipeline_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPipelineEvents"></a>

```python
def reset_pipeline_events() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_push_events_branch_filter` <a name="reset_push_events_branch_filter" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEventsBranchFilter"></a>

```python
def reset_push_events_branch_filter() -> None
```

##### `reset_releases_events` <a name="reset_releases_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetReleasesEvents"></a>

```python
def reset_releases_events() -> None
```

##### `reset_resource_access_token_events` <a name="reset_resource_access_token_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetResourceAccessTokenEvents"></a>

```python
def reset_resource_access_token_events() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_wiki_page_events` <a name="reset_wiki_page_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetWikiPageEvents"></a>

```python
def reset_wiki_page_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectHook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectHook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customHeaders">custom_headers</a></code> | <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList">ProjectHookCustomHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.hookId">hook_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEventsInput">confidential_issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEventsInput">confidential_note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customHeadersInput">custom_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplateInput">custom_webhook_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEventsInput">deployment_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerificationInput">enable_ssl_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEventsInput">issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEventsInput">job_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEventsInput">merge_requests_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEventsInput">note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEventsInput">pipeline_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilterInput">push_events_branch_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEventsInput">releases_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.resourceAccessTokenEventsInput">resource_access_token_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEventsInput">wiki_page_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplate">custom_webhook_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEvents">deployment_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilter">push_events_branch_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEvents">releases_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.resourceAccessTokenEvents">resource_access_token_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customHeaders"></a>

```python
custom_headers: ProjectHookCustomHeadersList
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList">ProjectHookCustomHeadersList</a>

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.hookId"></a>

```python
hook_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidential_issues_events_input`<sup>Optional</sup> <a name="confidential_issues_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEventsInput"></a>

```python
confidential_issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_events_input`<sup>Optional</sup> <a name="confidential_note_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEventsInput"></a>

```python
confidential_note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_headers_input`<sup>Optional</sup> <a name="custom_headers_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customHeadersInput"></a>

```python
custom_headers_input: typing.Union[IResolvable, typing.List[ProjectHookCustomHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]

---

##### `custom_webhook_template_input`<sup>Optional</sup> <a name="custom_webhook_template_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplateInput"></a>

```python
custom_webhook_template_input: str
```

- *Type:* str

---

##### `deployment_events_input`<sup>Optional</sup> <a name="deployment_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEventsInput"></a>

```python
deployment_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_ssl_verification_input`<sup>Optional</sup> <a name="enable_ssl_verification_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerificationInput"></a>

```python
enable_ssl_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_events_input`<sup>Optional</sup> <a name="issues_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEventsInput"></a>

```python
issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `job_events_input`<sup>Optional</sup> <a name="job_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEventsInput"></a>

```python
job_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_events_input`<sup>Optional</sup> <a name="merge_requests_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEventsInput"></a>

```python
merge_requests_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `note_events_input`<sup>Optional</sup> <a name="note_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEventsInput"></a>

```python
note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_events_input`<sup>Optional</sup> <a name="pipeline_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEventsInput"></a>

```python
pipeline_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_events_branch_filter_input`<sup>Optional</sup> <a name="push_events_branch_filter_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilterInput"></a>

```python
push_events_branch_filter_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `releases_events_input`<sup>Optional</sup> <a name="releases_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEventsInput"></a>

```python
releases_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_access_token_events_input`<sup>Optional</sup> <a name="resource_access_token_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.resourceAccessTokenEventsInput"></a>

```python
resource_access_token_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `wiki_page_events_input`<sup>Optional</sup> <a name="wiki_page_events_input" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEventsInput"></a>

```python
wiki_page_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_issues_events`<sup>Required</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_events`<sup>Required</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_webhook_template`<sup>Required</sup> <a name="custom_webhook_template" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplate"></a>

```python
custom_webhook_template: str
```

- *Type:* str

---

##### `deployment_events`<sup>Required</sup> <a name="deployment_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEvents"></a>

```python
deployment_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_ssl_verification`<sup>Required</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_events`<sup>Required</sup> <a name="issues_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `job_events`<sup>Required</sup> <a name="job_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEvents"></a>

```python
job_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `note_events`<sup>Required</sup> <a name="note_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_events`<sup>Required</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_events_branch_filter`<sup>Required</sup> <a name="push_events_branch_filter" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilter"></a>

```python
push_events_branch_filter: str
```

- *Type:* str

---

##### `releases_events`<sup>Required</sup> <a name="releases_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEvents"></a>

```python
releases_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_access_token_events`<sup>Required</sup> <a name="resource_access_token_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.resourceAccessTokenEvents"></a>

```python
resource_access_token_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `wiki_page_events`<sup>Required</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectHookConfig <a name="ProjectHookConfig" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  url: str,
  confidential_issues_events: typing.Union[bool, IResolvable] = None,
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  custom_headers: typing.Union[IResolvable, typing.List[ProjectHookCustomHeaders]] = None,
  custom_webhook_template: str = None,
  deployment_events: typing.Union[bool, IResolvable] = None,
  description: str = None,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  job_events: typing.Union[bool, IResolvable] = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  name: str = None,
  note_events: typing.Union[bool, IResolvable] = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  push_events: typing.Union[bool, IResolvable] = None,
  push_events_branch_filter: str = None,
  releases_events: typing.Union[bool, IResolvable] = None,
  resource_access_token_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  token: str = None,
  wiki_page_events: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.project">project</a></code> | <code>str</code> | The name or id of the project to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.url">url</a></code> | <code>str</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customHeaders">custom_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]</code> | Custom headers for the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customWebhookTemplate">custom_webhook_template</a></code> | <code>str</code> | Custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.deploymentEvents">deployment_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.description">description</a></code> | <code>str</code> | Description of the webhook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable SSL verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.name">name</a></code> | <code>str</code> | Name of the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEventsBranchFilter">push_events_branch_filter</a></code> | <code>str</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.releasesEvents">releases_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for release events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.resourceAccessTokenEvents">resource_access_token_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for project access token expiry events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.token">token</a></code> | <code>str</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The name or id of the project to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#project ProjectHook#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#url ProjectHook#url}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#confidential_issues_events ProjectHook#confidential_issues_events}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#confidential_note_events ProjectHook#confidential_note_events}

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customHeaders"></a>

```python
custom_headers: typing.Union[IResolvable, typing.List[ProjectHookCustomHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]

Custom headers for the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#custom_headers ProjectHook#custom_headers}

---

##### `custom_webhook_template`<sup>Optional</sup> <a name="custom_webhook_template" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customWebhookTemplate"></a>

```python
custom_webhook_template: str
```

- *Type:* str

Custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#custom_webhook_template ProjectHook#custom_webhook_template}

---

##### `deployment_events`<sup>Optional</sup> <a name="deployment_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.deploymentEvents"></a>

```python
deployment_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#deployment_events ProjectHook#deployment_events}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#description ProjectHook#description}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable SSL verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#enable_ssl_verification ProjectHook#enable_ssl_verification}

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#issues_events ProjectHook#issues_events}

---

##### `job_events`<sup>Optional</sup> <a name="job_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.jobEvents"></a>

```python
job_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#job_events ProjectHook#job_events}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#merge_requests_events ProjectHook#merge_requests_events}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#name ProjectHook#name}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#note_events ProjectHook#note_events}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#pipeline_events ProjectHook#pipeline_events}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#push_events ProjectHook#push_events}

---

##### `push_events_branch_filter`<sup>Optional</sup> <a name="push_events_branch_filter" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEventsBranchFilter"></a>

```python
push_events_branch_filter: str
```

- *Type:* str

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#push_events_branch_filter ProjectHook#push_events_branch_filter}

---

##### `releases_events`<sup>Optional</sup> <a name="releases_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.releasesEvents"></a>

```python
releases_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for release events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#releases_events ProjectHook#releases_events}

---

##### `resource_access_token_events`<sup>Optional</sup> <a name="resource_access_token_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.resourceAccessTokenEvents"></a>

```python
resource_access_token_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for project access token expiry events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#resource_access_token_events ProjectHook#resource_access_token_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#tag_push_events ProjectHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.token"></a>

```python
token: str
```

- *Type:* str

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#token ProjectHook#token}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#wiki_page_events ProjectHook#wiki_page_events}

---

### ProjectHookCustomHeaders <a name="ProjectHookCustomHeaders" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHookCustomHeaders(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.property.key">key</a></code> | <code>str</code> | Key of the custom header. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.property.value">value</a></code> | <code>str</code> | Value of the custom header. This value cannot be imported. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.property.key"></a>

```python
key: str
```

- *Type:* str

Key of the custom header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#key ProjectHook#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the custom header. This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_hook#value ProjectHook#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectHookCustomHeadersList <a name="ProjectHookCustomHeadersList" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHookCustomHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectHookCustomHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectHookCustomHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]]

---


### ProjectHookCustomHeadersOutputReference <a name="ProjectHookCustomHeadersOutputReference" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_hook

projectHook.ProjectHookCustomHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectHookCustomHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>]

---



