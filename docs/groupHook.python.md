# `groupHook` Submodule <a name="`groupHook` Submodule" id="@cdktf/provider-gitlab.groupHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupHook <a name="GroupHook" id="@cdktf/provider-gitlab.groupHook.GroupHook"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook gitlab_group_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  url: str,
  branch_filter_strategy: str = None,
  confidential_issues_events: typing.Union[bool, IResolvable] = None,
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  custom_headers: typing.Union[IResolvable, typing.List[GroupHookCustomHeaders]] = None,
  custom_webhook_template: str = None,
  deployment_events: typing.Union[bool, IResolvable] = None,
  description: str = None,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  feature_flag_events: typing.Union[bool, IResolvable] = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  job_events: typing.Union[bool, IResolvable] = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  name: str = None,
  note_events: typing.Union[bool, IResolvable] = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  push_events: typing.Union[bool, IResolvable] = None,
  push_events_branch_filter: str = None,
  releases_events: typing.Union[bool, IResolvable] = None,
  subgroup_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  token: str = None,
  wiki_page_events: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.group">group</a></code> | <code>str</code> | The full path or id of the group to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.url">url</a></code> | <code>str</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.branchFilterStrategy">branch_filter_strategy</a></code> | <code>str</code> | Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.customHeaders">custom_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]</code> | Custom headers for the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.customWebhookTemplate">custom_webhook_template</a></code> | <code>str</code> | Custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.deploymentEvents">deployment_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the group webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable SSL verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.featureFlagEvents">feature_flag_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for feature flag events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the group webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for note events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pushEventsBranchFilter">push_events_branch_filter</a></code> | <code>str</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.releasesEvents">releases_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for release events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.subgroupEvents">subgroup_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for subgroup events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.token">token</a></code> | <code>str</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.group"></a>

- *Type:* str

The full path or id of the group to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#group GroupHook#group}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.url"></a>

- *Type:* str

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#url GroupHook#url}

---

##### `branch_filter_strategy`<sup>Optional</sup> <a name="branch_filter_strategy" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.branchFilterStrategy"></a>

- *Type:* str

Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#branch_filter_strategy GroupHook#branch_filter_strategy}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#confidential_issues_events GroupHook#confidential_issues_events}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#confidential_note_events GroupHook#confidential_note_events}

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.customHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]

Custom headers for the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#custom_headers GroupHook#custom_headers}

---

##### `custom_webhook_template`<sup>Optional</sup> <a name="custom_webhook_template" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.customWebhookTemplate"></a>

- *Type:* str

Custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#custom_webhook_template GroupHook#custom_webhook_template}

---

##### `deployment_events`<sup>Optional</sup> <a name="deployment_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.deploymentEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#deployment_events GroupHook#deployment_events}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.description"></a>

- *Type:* str

Description of the group webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#description GroupHook#description}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.enableSslVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable SSL verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#enable_ssl_verification GroupHook#enable_ssl_verification}

---

##### `feature_flag_events`<sup>Optional</sup> <a name="feature_flag_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.featureFlagEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for feature flag events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#feature_flag_events GroupHook#feature_flag_events}

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.issuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#issues_events GroupHook#issues_events}

---

##### `job_events`<sup>Optional</sup> <a name="job_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.jobEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#job_events GroupHook#job_events}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#merge_requests_events GroupHook#merge_requests_events}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.name"></a>

- *Type:* str

Name of the group webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#name GroupHook#name}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.noteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#note_events GroupHook#note_events}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pipelineEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#pipeline_events GroupHook#pipeline_events}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#push_events GroupHook#push_events}

---

##### `push_events_branch_filter`<sup>Optional</sup> <a name="push_events_branch_filter" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pushEventsBranchFilter"></a>

- *Type:* str

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#push_events_branch_filter GroupHook#push_events_branch_filter}

---

##### `releases_events`<sup>Optional</sup> <a name="releases_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.releasesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for release events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#releases_events GroupHook#releases_events}

---

##### `subgroup_events`<sup>Optional</sup> <a name="subgroup_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.subgroupEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for subgroup events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#subgroup_events GroupHook#subgroup_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#tag_push_events GroupHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.token"></a>

- *Type:* str

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#token GroupHook#token}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.wikiPageEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#wiki_page_events GroupHook#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.putCustomHeaders">put_custom_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetBranchFilterStrategy">reset_branch_filter_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialIssuesEvents">reset_confidential_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialNoteEvents">reset_confidential_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetCustomHeaders">reset_custom_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetCustomWebhookTemplate">reset_custom_webhook_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetDeploymentEvents">reset_deployment_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetEnableSslVerification">reset_enable_ssl_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetFeatureFlagEvents">reset_feature_flag_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetIssuesEvents">reset_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetJobEvents">reset_job_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetMergeRequestsEvents">reset_merge_requests_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetNoteEvents">reset_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPipelineEvents">reset_pipeline_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEventsBranchFilter">reset_push_events_branch_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetReleasesEvents">reset_releases_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetSubgroupEvents">reset_subgroup_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetWikiPageEvents">reset_wiki_page_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupHook.GroupHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.groupHook.GroupHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupHook.GroupHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupHook.GroupHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.groupHook.GroupHook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_headers` <a name="put_custom_headers" id="@cdktf/provider-gitlab.groupHook.GroupHook.putCustomHeaders"></a>

```python
def put_custom_headers(
  value: typing.Union[IResolvable, typing.List[GroupHookCustomHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHook.putCustomHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]

---

##### `reset_branch_filter_strategy` <a name="reset_branch_filter_strategy" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetBranchFilterStrategy"></a>

```python
def reset_branch_filter_strategy() -> None
```

##### `reset_confidential_issues_events` <a name="reset_confidential_issues_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialIssuesEvents"></a>

```python
def reset_confidential_issues_events() -> None
```

##### `reset_confidential_note_events` <a name="reset_confidential_note_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialNoteEvents"></a>

```python
def reset_confidential_note_events() -> None
```

##### `reset_custom_headers` <a name="reset_custom_headers" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetCustomHeaders"></a>

```python
def reset_custom_headers() -> None
```

##### `reset_custom_webhook_template` <a name="reset_custom_webhook_template" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetCustomWebhookTemplate"></a>

```python
def reset_custom_webhook_template() -> None
```

##### `reset_deployment_events` <a name="reset_deployment_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetDeploymentEvents"></a>

```python
def reset_deployment_events() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_ssl_verification` <a name="reset_enable_ssl_verification" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetEnableSslVerification"></a>

```python
def reset_enable_ssl_verification() -> None
```

##### `reset_feature_flag_events` <a name="reset_feature_flag_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetFeatureFlagEvents"></a>

```python
def reset_feature_flag_events() -> None
```

##### `reset_issues_events` <a name="reset_issues_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetIssuesEvents"></a>

```python
def reset_issues_events() -> None
```

##### `reset_job_events` <a name="reset_job_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetJobEvents"></a>

```python
def reset_job_events() -> None
```

##### `reset_merge_requests_events` <a name="reset_merge_requests_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetMergeRequestsEvents"></a>

```python
def reset_merge_requests_events() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_note_events` <a name="reset_note_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetNoteEvents"></a>

```python
def reset_note_events() -> None
```

##### `reset_pipeline_events` <a name="reset_pipeline_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPipelineEvents"></a>

```python
def reset_pipeline_events() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_push_events_branch_filter` <a name="reset_push_events_branch_filter" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEventsBranchFilter"></a>

```python
def reset_push_events_branch_filter() -> None
```

##### `reset_releases_events` <a name="reset_releases_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetReleasesEvents"></a>

```python
def reset_releases_events() -> None
```

##### `reset_subgroup_events` <a name="reset_subgroup_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetSubgroupEvents"></a>

```python
def reset_subgroup_events() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_wiki_page_events` <a name="reset_wiki_page_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetWikiPageEvents"></a>

```python
def reset_wiki_page_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupHook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupHook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.customHeaders">custom_headers</a></code> | <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList">GroupHookCustomHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.hookId">hook_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.branchFilterStrategyInput">branch_filter_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEventsInput">confidential_issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEventsInput">confidential_note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.customHeadersInput">custom_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.customWebhookTemplateInput">custom_webhook_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEventsInput">deployment_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerificationInput">enable_ssl_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.featureFlagEventsInput">feature_flag_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEventsInput">issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEventsInput">job_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEventsInput">merge_requests_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEventsInput">note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEventsInput">pipeline_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilterInput">push_events_branch_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEventsInput">releases_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEventsInput">subgroup_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEventsInput">wiki_page_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.branchFilterStrategy">branch_filter_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.customWebhookTemplate">custom_webhook_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEvents">deployment_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.featureFlagEvents">feature_flag_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilter">push_events_branch_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEvents">releases_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEvents">subgroup_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.customHeaders"></a>

```python
custom_headers: GroupHookCustomHeadersList
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList">GroupHookCustomHeadersList</a>

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.hookId"></a>

```python
hook_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `branch_filter_strategy_input`<sup>Optional</sup> <a name="branch_filter_strategy_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.branchFilterStrategyInput"></a>

```python
branch_filter_strategy_input: str
```

- *Type:* str

---

##### `confidential_issues_events_input`<sup>Optional</sup> <a name="confidential_issues_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEventsInput"></a>

```python
confidential_issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_events_input`<sup>Optional</sup> <a name="confidential_note_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEventsInput"></a>

```python
confidential_note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_headers_input`<sup>Optional</sup> <a name="custom_headers_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.customHeadersInput"></a>

```python
custom_headers_input: typing.Union[IResolvable, typing.List[GroupHookCustomHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]

---

##### `custom_webhook_template_input`<sup>Optional</sup> <a name="custom_webhook_template_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.customWebhookTemplateInput"></a>

```python
custom_webhook_template_input: str
```

- *Type:* str

---

##### `deployment_events_input`<sup>Optional</sup> <a name="deployment_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEventsInput"></a>

```python
deployment_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_ssl_verification_input`<sup>Optional</sup> <a name="enable_ssl_verification_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerificationInput"></a>

```python
enable_ssl_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `feature_flag_events_input`<sup>Optional</sup> <a name="feature_flag_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.featureFlagEventsInput"></a>

```python
feature_flag_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `issues_events_input`<sup>Optional</sup> <a name="issues_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEventsInput"></a>

```python
issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `job_events_input`<sup>Optional</sup> <a name="job_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEventsInput"></a>

```python
job_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_events_input`<sup>Optional</sup> <a name="merge_requests_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEventsInput"></a>

```python
merge_requests_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `note_events_input`<sup>Optional</sup> <a name="note_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEventsInput"></a>

```python
note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_events_input`<sup>Optional</sup> <a name="pipeline_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEventsInput"></a>

```python
pipeline_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_events_branch_filter_input`<sup>Optional</sup> <a name="push_events_branch_filter_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilterInput"></a>

```python
push_events_branch_filter_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `releases_events_input`<sup>Optional</sup> <a name="releases_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEventsInput"></a>

```python
releases_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subgroup_events_input`<sup>Optional</sup> <a name="subgroup_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEventsInput"></a>

```python
subgroup_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `wiki_page_events_input`<sup>Optional</sup> <a name="wiki_page_events_input" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEventsInput"></a>

```python
wiki_page_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch_filter_strategy`<sup>Required</sup> <a name="branch_filter_strategy" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.branchFilterStrategy"></a>

```python
branch_filter_strategy: str
```

- *Type:* str

---

##### `confidential_issues_events`<sup>Required</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_events`<sup>Required</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_webhook_template`<sup>Required</sup> <a name="custom_webhook_template" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.customWebhookTemplate"></a>

```python
custom_webhook_template: str
```

- *Type:* str

---

##### `deployment_events`<sup>Required</sup> <a name="deployment_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEvents"></a>

```python
deployment_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_ssl_verification`<sup>Required</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `feature_flag_events`<sup>Required</sup> <a name="feature_flag_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.featureFlagEvents"></a>

```python
feature_flag_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `issues_events`<sup>Required</sup> <a name="issues_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `job_events`<sup>Required</sup> <a name="job_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEvents"></a>

```python
job_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `note_events`<sup>Required</sup> <a name="note_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_events`<sup>Required</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_events_branch_filter`<sup>Required</sup> <a name="push_events_branch_filter" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilter"></a>

```python
push_events_branch_filter: str
```

- *Type:* str

---

##### `releases_events`<sup>Required</sup> <a name="releases_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEvents"></a>

```python
releases_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subgroup_events`<sup>Required</sup> <a name="subgroup_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEvents"></a>

```python
subgroup_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `wiki_page_events`<sup>Required</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupHookConfig <a name="GroupHookConfig" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  url: str,
  branch_filter_strategy: str = None,
  confidential_issues_events: typing.Union[bool, IResolvable] = None,
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  custom_headers: typing.Union[IResolvable, typing.List[GroupHookCustomHeaders]] = None,
  custom_webhook_template: str = None,
  deployment_events: typing.Union[bool, IResolvable] = None,
  description: str = None,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  feature_flag_events: typing.Union[bool, IResolvable] = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  job_events: typing.Union[bool, IResolvable] = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  name: str = None,
  note_events: typing.Union[bool, IResolvable] = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  push_events: typing.Union[bool, IResolvable] = None,
  push_events_branch_filter: str = None,
  releases_events: typing.Union[bool, IResolvable] = None,
  subgroup_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  token: str = None,
  wiki_page_events: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.group">group</a></code> | <code>str</code> | The full path or id of the group to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.url">url</a></code> | <code>str</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.branchFilterStrategy">branch_filter_strategy</a></code> | <code>str</code> | Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.customHeaders">custom_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]</code> | Custom headers for the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.customWebhookTemplate">custom_webhook_template</a></code> | <code>str</code> | Custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.deploymentEvents">deployment_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.description">description</a></code> | <code>str</code> | Description of the group webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable SSL verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.featureFlagEvents">feature_flag_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for feature flag events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.jobEvents">job_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.name">name</a></code> | <code>str</code> | Name of the group webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for note events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEventsBranchFilter">push_events_branch_filter</a></code> | <code>str</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.releasesEvents">releases_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for release events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.subgroupEvents">subgroup_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for subgroup events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.token">token</a></code> | <code>str</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Invoke the hook for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The full path or id of the group to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#group GroupHook#group}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#url GroupHook#url}

---

##### `branch_filter_strategy`<sup>Optional</sup> <a name="branch_filter_strategy" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.branchFilterStrategy"></a>

```python
branch_filter_strategy: str
```

- *Type:* str

Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#branch_filter_strategy GroupHook#branch_filter_strategy}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#confidential_issues_events GroupHook#confidential_issues_events}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#confidential_note_events GroupHook#confidential_note_events}

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.customHeaders"></a>

```python
custom_headers: typing.Union[IResolvable, typing.List[GroupHookCustomHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]

Custom headers for the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#custom_headers GroupHook#custom_headers}

---

##### `custom_webhook_template`<sup>Optional</sup> <a name="custom_webhook_template" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.customWebhookTemplate"></a>

```python
custom_webhook_template: str
```

- *Type:* str

Custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#custom_webhook_template GroupHook#custom_webhook_template}

---

##### `deployment_events`<sup>Optional</sup> <a name="deployment_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.deploymentEvents"></a>

```python
deployment_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#deployment_events GroupHook#deployment_events}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the group webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#description GroupHook#description}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable SSL verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#enable_ssl_verification GroupHook#enable_ssl_verification}

---

##### `feature_flag_events`<sup>Optional</sup> <a name="feature_flag_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.featureFlagEvents"></a>

```python
feature_flag_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for feature flag events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#feature_flag_events GroupHook#feature_flag_events}

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#issues_events GroupHook#issues_events}

---

##### `job_events`<sup>Optional</sup> <a name="job_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.jobEvents"></a>

```python
job_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#job_events GroupHook#job_events}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#merge_requests_events GroupHook#merge_requests_events}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the group webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#name GroupHook#name}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#note_events GroupHook#note_events}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#pipeline_events GroupHook#pipeline_events}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#push_events GroupHook#push_events}

---

##### `push_events_branch_filter`<sup>Optional</sup> <a name="push_events_branch_filter" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEventsBranchFilter"></a>

```python
push_events_branch_filter: str
```

- *Type:* str

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#push_events_branch_filter GroupHook#push_events_branch_filter}

---

##### `releases_events`<sup>Optional</sup> <a name="releases_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.releasesEvents"></a>

```python
releases_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for release events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#releases_events GroupHook#releases_events}

---

##### `subgroup_events`<sup>Optional</sup> <a name="subgroup_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.subgroupEvents"></a>

```python
subgroup_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for subgroup events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#subgroup_events GroupHook#subgroup_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#tag_push_events GroupHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.token"></a>

```python
token: str
```

- *Type:* str

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#token GroupHook#token}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#wiki_page_events GroupHook#wiki_page_events}

---

### GroupHookCustomHeaders <a name="GroupHookCustomHeaders" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHookCustomHeaders(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.property.key">key</a></code> | <code>str</code> | Key of the custom header. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.property.value">value</a></code> | <code>str</code> | Value of the custom header. This value cannot be imported. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.property.key"></a>

```python
key: str
```

- *Type:* str

Key of the custom header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#key GroupHook#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the custom header. This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_hook#value GroupHook#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupHookCustomHeadersList <a name="GroupHookCustomHeadersList" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHookCustomHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroupHookCustomHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GroupHookCustomHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]]

---


### GroupHookCustomHeadersOutputReference <a name="GroupHookCustomHeadersOutputReference" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_hook

groupHook.GroupHookCustomHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupHookCustomHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>]

---



