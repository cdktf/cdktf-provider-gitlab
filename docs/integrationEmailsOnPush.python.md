# `integrationEmailsOnPush` Submodule <a name="`integrationEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.integrationEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationEmailsOnPush <a name="IntegrationEmailsOnPush" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push gitlab_integration_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_emails_on_push

integrationEmailsOnPush.IntegrationEmailsOnPush(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project: str,
  recipients: str,
  branches_to_be_notified: str = None,
  disable_diffs: bool | IResolvable = None,
  id: str = None,
  push_events: bool | IResolvable = None,
  send_from_committer_email: bool | IResolvable = None,
  tag_push_events: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.project">project</a></code> | <code>str</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.recipients">recipients</a></code> | <code>str</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.disableDiffs">disable_diffs</a></code> | <code>bool \| cdktf.IResolvable</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#id IntegrationEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.pushEvents">push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.sendFromCommitterEmail">send_from_committer_email</a></code> | <code>bool \| cdktf.IResolvable</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for tag push events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.project"></a>

- *Type:* str

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#project IntegrationEmailsOnPush#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.recipients"></a>

- *Type:* str

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#recipients IntegrationEmailsOnPush#recipients}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* str

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#branches_to_be_notified IntegrationEmailsOnPush#branches_to_be_notified}

---

##### `disable_diffs`<sup>Optional</sup> <a name="disable_diffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.disableDiffs"></a>

- *Type:* bool | cdktf.IResolvable

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#disable_diffs IntegrationEmailsOnPush#disable_diffs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#id IntegrationEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.pushEvents"></a>

- *Type:* bool | cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#push_events IntegrationEmailsOnPush#push_events}

---

##### `send_from_committer_email`<sup>Optional</sup> <a name="send_from_committer_email" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.sendFromCommitterEmail"></a>

- *Type:* bool | cdktf.IResolvable

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#send_from_committer_email IntegrationEmailsOnPush#send_from_committer_email}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.tagPushEvents"></a>

- *Type:* bool | cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#tag_push_events IntegrationEmailsOnPush#tag_push_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetBranchesToBeNotified">reset_branches_to_be_notified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetDisableDiffs">reset_disable_diffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetSendFromCommitterEmail">reset_send_from_committer_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_branches_to_be_notified` <a name="reset_branches_to_be_notified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetBranchesToBeNotified"></a>

```python
def reset_branches_to_be_notified() -> None
```

##### `reset_disable_diffs` <a name="reset_disable_diffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetDisableDiffs"></a>

```python
def reset_disable_diffs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_send_from_committer_email` <a name="reset_send_from_committer_email" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetSendFromCommitterEmail"></a>

```python
def reset_send_from_committer_email() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_emails_on_push

integrationEmailsOnPush.IntegrationEmailsOnPush.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_emails_on_push

integrationEmailsOnPush.IntegrationEmailsOnPush.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_emails_on_push

integrationEmailsOnPush.IntegrationEmailsOnPush.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_emails_on_push

integrationEmailsOnPush.IntegrationEmailsOnPush.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationEmailsOnPush to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationEmailsOnPush that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationEmailsOnPush to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotifiedInput">branches_to_be_notified_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffsInput">disable_diffs_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEventsInput">push_events_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipientsInput">recipients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmailInput">send_from_committer_email_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffs">disable_diffs</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEvents">push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipients">recipients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmail">send_from_committer_email</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEvents">tag_push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `branches_to_be_notified_input`<sup>Optional</sup> <a name="branches_to_be_notified_input" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```python
branches_to_be_notified_input: str
```

- *Type:* str

---

##### `disable_diffs_input`<sup>Optional</sup> <a name="disable_diffs_input" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffsInput"></a>

```python
disable_diffs_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEventsInput"></a>

```python
push_events_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipientsInput"></a>

```python
recipients_input: str
```

- *Type:* str

---

##### `send_from_committer_email_input`<sup>Optional</sup> <a name="send_from_committer_email_input" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```python
send_from_committer_email_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEventsInput"></a>

```python
tag_push_events_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `branches_to_be_notified`<sup>Required</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

---

##### `disable_diffs`<sup>Required</sup> <a name="disable_diffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffs"></a>

```python
disable_diffs: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEvents"></a>

```python
push_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipients"></a>

```python
recipients: str
```

- *Type:* str

---

##### `send_from_committer_email`<sup>Required</sup> <a name="send_from_committer_email" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmail"></a>

```python
send_from_committer_email: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEvents"></a>

```python
tag_push_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationEmailsOnPushConfig <a name="IntegrationEmailsOnPushConfig" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_emails_on_push

integrationEmailsOnPush.IntegrationEmailsOnPushConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project: str,
  recipients: str,
  branches_to_be_notified: str = None,
  disable_diffs: bool | IResolvable = None,
  id: str = None,
  push_events: bool | IResolvable = None,
  send_from_committer_email: bool | IResolvable = None,
  tag_push_events: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.project">project</a></code> | <code>str</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.recipients">recipients</a></code> | <code>str</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.disableDiffs">disable_diffs</a></code> | <code>bool \| cdktf.IResolvable</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#id IntegrationEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.pushEvents">push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.sendFromCommitterEmail">send_from_committer_email</a></code> | <code>bool \| cdktf.IResolvable</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.tagPushEvents">tag_push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for tag push events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#project IntegrationEmailsOnPush#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.recipients"></a>

```python
recipients: str
```

- *Type:* str

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#recipients IntegrationEmailsOnPush#recipients}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#branches_to_be_notified IntegrationEmailsOnPush#branches_to_be_notified}

---

##### `disable_diffs`<sup>Optional</sup> <a name="disable_diffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.disableDiffs"></a>

```python
disable_diffs: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#disable_diffs IntegrationEmailsOnPush#disable_diffs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#id IntegrationEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.pushEvents"></a>

```python
push_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#push_events IntegrationEmailsOnPush#push_events}

---

##### `send_from_committer_email`<sup>Optional</sup> <a name="send_from_committer_email" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```python
send_from_committer_email: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#send_from_committer_email IntegrationEmailsOnPush#send_from_committer_email}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.tagPushEvents"></a>

```python
tag_push_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_emails_on_push#tag_push_events IntegrationEmailsOnPush#tag_push_events}

---



