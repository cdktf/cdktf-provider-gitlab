# `projectIntegrationMicrosoftTeams` Submodule <a name="`projectIntegrationMicrosoftTeams` Submodule" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationMicrosoftTeams <a name="ProjectIntegrationMicrosoftTeams" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams gitlab_project_integration_microsoft_teams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_microsoft_teams

projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams(
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
  confidential_issues_events: typing.Union[bool, IResolvable] = None,
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  note_events: typing.Union[bool, IResolvable] = None,
  notify_only_broken_pipelines: typing.Union[bool, IResolvable] = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  push_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  wiki_page_events: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.webhook">webhook</a></code> | <code>str</code> | The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential issue events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#id ProjectIntegrationMicrosoftTeams#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issue events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#project ProjectIntegrationMicrosoftTeams#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.webhook"></a>

- *Type:* str

The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#webhook ProjectIntegrationMicrosoftTeams#webhook}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* str

Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#branches_to_be_notified ProjectIntegrationMicrosoftTeams#branches_to_be_notified}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#confidential_issues_events ProjectIntegrationMicrosoftTeams#confidential_issues_events}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#confidential_note_events ProjectIntegrationMicrosoftTeams#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#id ProjectIntegrationMicrosoftTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.issuesEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#issues_events ProjectIntegrationMicrosoftTeams#issues_events}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#merge_requests_events ProjectIntegrationMicrosoftTeams#merge_requests_events}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.noteEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#note_events ProjectIntegrationMicrosoftTeams#note_events}

---

##### `notify_only_broken_pipelines`<sup>Optional</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.notifyOnlyBrokenPipelines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#notify_only_broken_pipelines ProjectIntegrationMicrosoftTeams#notify_only_broken_pipelines}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.pipelineEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#pipeline_events ProjectIntegrationMicrosoftTeams#pipeline_events}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#push_events ProjectIntegrationMicrosoftTeams#push_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#tag_push_events ProjectIntegrationMicrosoftTeams#tag_push_events}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.wikiPageEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#wiki_page_events ProjectIntegrationMicrosoftTeams#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetBranchesToBeNotified">reset_branches_to_be_notified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialIssuesEvents">reset_confidential_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialNoteEvents">reset_confidential_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetIssuesEvents">reset_issues_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetMergeRequestsEvents">reset_merge_requests_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNoteEvents">reset_note_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNotifyOnlyBrokenPipelines">reset_notify_only_broken_pipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPipelineEvents">reset_pipeline_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetWikiPageEvents">reset_wiki_page_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_branches_to_be_notified` <a name="reset_branches_to_be_notified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetBranchesToBeNotified"></a>

```python
def reset_branches_to_be_notified() -> None
```

##### `reset_confidential_issues_events` <a name="reset_confidential_issues_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialIssuesEvents"></a>

```python
def reset_confidential_issues_events() -> None
```

##### `reset_confidential_note_events` <a name="reset_confidential_note_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialNoteEvents"></a>

```python
def reset_confidential_note_events() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issues_events` <a name="reset_issues_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetIssuesEvents"></a>

```python
def reset_issues_events() -> None
```

##### `reset_merge_requests_events` <a name="reset_merge_requests_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetMergeRequestsEvents"></a>

```python
def reset_merge_requests_events() -> None
```

##### `reset_note_events` <a name="reset_note_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNoteEvents"></a>

```python
def reset_note_events() -> None
```

##### `reset_notify_only_broken_pipelines` <a name="reset_notify_only_broken_pipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNotifyOnlyBrokenPipelines"></a>

```python
def reset_notify_only_broken_pipelines() -> None
```

##### `reset_pipeline_events` <a name="reset_pipeline_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPipelineEvents"></a>

```python
def reset_pipeline_events() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

##### `reset_wiki_page_events` <a name="reset_wiki_page_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetWikiPageEvents"></a>

```python
def reset_wiki_page_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectIntegrationMicrosoftTeams resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_microsoft_teams

projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_microsoft_teams

projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_microsoft_teams

projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_microsoft_teams

projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectIntegrationMicrosoftTeams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectIntegrationMicrosoftTeams to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectIntegrationMicrosoftTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationMicrosoftTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotifiedInput">branches_to_be_notified_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEventsInput">confidential_issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEventsInput">confidential_note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEventsInput">issues_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEventsInput">merge_requests_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEventsInput">note_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelinesInput">notify_only_broken_pipelines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEventsInput">pipeline_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhookInput">webhook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEventsInput">wiki_page_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhook">webhook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `branches_to_be_notified_input`<sup>Optional</sup> <a name="branches_to_be_notified_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotifiedInput"></a>

```python
branches_to_be_notified_input: str
```

- *Type:* str

---

##### `confidential_issues_events_input`<sup>Optional</sup> <a name="confidential_issues_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEventsInput"></a>

```python
confidential_issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_events_input`<sup>Optional</sup> <a name="confidential_note_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEventsInput"></a>

```python
confidential_note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issues_events_input`<sup>Optional</sup> <a name="issues_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEventsInput"></a>

```python
issues_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_events_input`<sup>Optional</sup> <a name="merge_requests_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEventsInput"></a>

```python
merge_requests_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `note_events_input`<sup>Optional</sup> <a name="note_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEventsInput"></a>

```python
note_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_only_broken_pipelines_input`<sup>Optional</sup> <a name="notify_only_broken_pipelines_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelinesInput"></a>

```python
notify_only_broken_pipelines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_events_input`<sup>Optional</sup> <a name="pipeline_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEventsInput"></a>

```python
pipeline_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhookInput"></a>

```python
webhook_input: str
```

- *Type:* str

---

##### `wiki_page_events_input`<sup>Optional</sup> <a name="wiki_page_events_input" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEventsInput"></a>

```python
wiki_page_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branches_to_be_notified`<sup>Required</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

---

##### `confidential_issues_events`<sup>Required</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_note_events`<sup>Required</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issues_events`<sup>Required</sup> <a name="issues_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `note_events`<sup>Required</sup> <a name="note_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_only_broken_pipelines`<sup>Required</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelines"></a>

```python
notify_only_broken_pipelines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipeline_events`<sup>Required</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

---

##### `wiki_page_events`<sup>Required</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationMicrosoftTeamsConfig <a name="ProjectIntegrationMicrosoftTeamsConfig" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_microsoft_teams

projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig(
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
  confidential_issues_events: typing.Union[bool, IResolvable] = None,
  confidential_note_events: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issues_events: typing.Union[bool, IResolvable] = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  note_events: typing.Union[bool, IResolvable] = None,
  notify_only_broken_pipelines: typing.Union[bool, IResolvable] = None,
  pipeline_events: typing.Union[bool, IResolvable] = None,
  push_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  wiki_page_events: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.webhook">webhook</a></code> | <code>str</code> | The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential issue events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#id ProjectIntegrationMicrosoftTeams#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.issuesEvents">issues_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issue events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.noteEvents">note_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pipelineEvents">pipeline_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.wikiPageEvents">wiki_page_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#project ProjectIntegrationMicrosoftTeams#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#webhook ProjectIntegrationMicrosoftTeams#webhook}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#branches_to_be_notified ProjectIntegrationMicrosoftTeams#branches_to_be_notified}

---

##### `confidential_issues_events`<sup>Optional</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#confidential_issues_events ProjectIntegrationMicrosoftTeams#confidential_issues_events}

---

##### `confidential_note_events`<sup>Optional</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialNoteEvents"></a>

```python
confidential_note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#confidential_note_events ProjectIntegrationMicrosoftTeams#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#id ProjectIntegrationMicrosoftTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issues_events`<sup>Optional</sup> <a name="issues_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.issuesEvents"></a>

```python
issues_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#issues_events ProjectIntegrationMicrosoftTeams#issues_events}

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#merge_requests_events ProjectIntegrationMicrosoftTeams#merge_requests_events}

---

##### `note_events`<sup>Optional</sup> <a name="note_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.noteEvents"></a>

```python
note_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#note_events ProjectIntegrationMicrosoftTeams#note_events}

---

##### `notify_only_broken_pipelines`<sup>Optional</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.notifyOnlyBrokenPipelines"></a>

```python
notify_only_broken_pipelines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#notify_only_broken_pipelines ProjectIntegrationMicrosoftTeams#notify_only_broken_pipelines}

---

##### `pipeline_events`<sup>Optional</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pipelineEvents"></a>

```python
pipeline_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#pipeline_events ProjectIntegrationMicrosoftTeams#pipeline_events}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#push_events ProjectIntegrationMicrosoftTeams#push_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#tag_push_events ProjectIntegrationMicrosoftTeams#tag_push_events}

---

##### `wiki_page_events`<sup>Optional</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.wikiPageEvents"></a>

```python
wiki_page_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#wiki_page_events ProjectIntegrationMicrosoftTeams#wiki_page_events}

---



