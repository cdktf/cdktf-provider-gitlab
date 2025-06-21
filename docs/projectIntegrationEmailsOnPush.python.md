# `projectIntegrationEmailsOnPush` Submodule <a name="`projectIntegrationEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationEmailsOnPush <a name="ProjectIntegrationEmailsOnPush" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push gitlab_project_integration_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_emails_on_push

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush(
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
  recipients: str,
  branches_to_be_notified: str = None,
  disable_diffs: typing.Union[bool, IResolvable] = None,
  id: str = None,
  push_events: typing.Union[bool, IResolvable] = None,
  send_from_committer_email: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.project">project</a></code> | <code>str</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.recipients">recipients</a></code> | <code>str</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.disableDiffs">disable_diffs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#id ProjectIntegrationEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.sendFromCommitterEmail">send_from_committer_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.project"></a>

- *Type:* str

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#project ProjectIntegrationEmailsOnPush#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.recipients"></a>

- *Type:* str

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#recipients ProjectIntegrationEmailsOnPush#recipients}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* str

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#branches_to_be_notified ProjectIntegrationEmailsOnPush#branches_to_be_notified}

---

##### `disable_diffs`<sup>Optional</sup> <a name="disable_diffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.disableDiffs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#disable_diffs ProjectIntegrationEmailsOnPush#disable_diffs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#id ProjectIntegrationEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#push_events ProjectIntegrationEmailsOnPush#push_events}

---

##### `send_from_committer_email`<sup>Optional</sup> <a name="send_from_committer_email" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.sendFromCommitterEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#send_from_committer_email ProjectIntegrationEmailsOnPush#send_from_committer_email}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#tag_push_events ProjectIntegrationEmailsOnPush#tag_push_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetBranchesToBeNotified">reset_branches_to_be_notified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetDisableDiffs">reset_disable_diffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetSendFromCommitterEmail">reset_send_from_committer_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_branches_to_be_notified` <a name="reset_branches_to_be_notified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetBranchesToBeNotified"></a>

```python
def reset_branches_to_be_notified() -> None
```

##### `reset_disable_diffs` <a name="reset_disable_diffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetDisableDiffs"></a>

```python
def reset_disable_diffs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_send_from_committer_email` <a name="reset_send_from_committer_email" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetSendFromCommitterEmail"></a>

```python
def reset_send_from_committer_email() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectIntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_emails_on_push

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_emails_on_push

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_emails_on_push

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_emails_on_push

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectIntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectIntegrationEmailsOnPush to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectIntegrationEmailsOnPush that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationEmailsOnPush to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotifiedInput">branches_to_be_notified_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffsInput">disable_diffs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipientsInput">recipients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmailInput">send_from_committer_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffs">disable_diffs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipients">recipients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmail">send_from_committer_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `branches_to_be_notified_input`<sup>Optional</sup> <a name="branches_to_be_notified_input" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```python
branches_to_be_notified_input: str
```

- *Type:* str

---

##### `disable_diffs_input`<sup>Optional</sup> <a name="disable_diffs_input" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffsInput"></a>

```python
disable_diffs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipientsInput"></a>

```python
recipients_input: str
```

- *Type:* str

---

##### `send_from_committer_email_input`<sup>Optional</sup> <a name="send_from_committer_email_input" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```python
send_from_committer_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branches_to_be_notified`<sup>Required</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

---

##### `disable_diffs`<sup>Required</sup> <a name="disable_diffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffs"></a>

```python
disable_diffs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipients"></a>

```python
recipients: str
```

- *Type:* str

---

##### `send_from_committer_email`<sup>Required</sup> <a name="send_from_committer_email" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmail"></a>

```python
send_from_committer_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationEmailsOnPushConfig <a name="ProjectIntegrationEmailsOnPushConfig" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_emails_on_push

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  recipients: str,
  branches_to_be_notified: str = None,
  disable_diffs: typing.Union[bool, IResolvable] = None,
  id: str = None,
  push_events: typing.Union[bool, IResolvable] = None,
  send_from_committer_email: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.project">project</a></code> | <code>str</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.recipients">recipients</a></code> | <code>str</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.disableDiffs">disable_diffs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#id ProjectIntegrationEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.sendFromCommitterEmail">send_from_committer_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#project ProjectIntegrationEmailsOnPush#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.recipients"></a>

```python
recipients: str
```

- *Type:* str

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#recipients ProjectIntegrationEmailsOnPush#recipients}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#branches_to_be_notified ProjectIntegrationEmailsOnPush#branches_to_be_notified}

---

##### `disable_diffs`<sup>Optional</sup> <a name="disable_diffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.disableDiffs"></a>

```python
disable_diffs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#disable_diffs ProjectIntegrationEmailsOnPush#disable_diffs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#id ProjectIntegrationEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#push_events ProjectIntegrationEmailsOnPush#push_events}

---

##### `send_from_committer_email`<sup>Optional</sup> <a name="send_from_committer_email" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```python
send_from_committer_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#send_from_committer_email ProjectIntegrationEmailsOnPush#send_from_committer_email}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_emails_on_push#tag_push_events ProjectIntegrationEmailsOnPush#tag_push_events}

---



