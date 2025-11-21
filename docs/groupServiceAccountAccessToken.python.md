# `groupServiceAccountAccessToken` Submodule <a name="`groupServiceAccountAccessToken` Submodule" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupServiceAccountAccessToken <a name="GroupServiceAccountAccessToken" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token gitlab_group_service_account_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_service_account_access_token

groupServiceAccountAccessToken.GroupServiceAccountAccessToken(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group: str,
  name: str,
  scopes: typing.List[str],
  user_id: typing.Union[int, float],
  expires_at: str = None,
  rotation_configuration: GroupServiceAccountAccessTokenRotationConfiguration = None,
  validate_past_expiration_date: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.group">group</a></code> | <code>str</code> | The ID or URL-encoded path of the group containing the service account. Must be a top level group. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the personal access token. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | The scopes of the group service account access token. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a service account user. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | The service account access token expiry date. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.rotationConfiguration">rotation_configuration</a></code> | <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.validatePastExpirationDate">validate_past_expiration_date</a></code> | <code>bool \| cdktf.IResolvable</code> | Wether to validate if the expiration date is in the future. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.group"></a>

- *Type:* str

The ID or URL-encoded path of the group containing the service account. Must be a top level group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#group GroupServiceAccountAccessToken#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.name"></a>

- *Type:* str

The name of the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#name GroupServiceAccountAccessToken#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

The scopes of the group service account access token.

Valid values are: `api`, `read_user`, `read_api`, `read_repository`, `write_repository`, `read_registry`, `write_registry`, `read_virtual_registry`, `write_virtual_registry`, `sudo`, `admin_mode`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `self_rotate`, `read_service_ping`. If `self_rotate` is included, you must also provide either `expires_at` or `rotation_configuration`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#scopes GroupServiceAccountAccessToken#scopes}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.userId"></a>

- *Type:* typing.Union[int, float]

The ID of a service account user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#user_id GroupServiceAccountAccessToken#user_id}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.expiresAt"></a>

- *Type:* str

The service account access token expiry date.

When left blank, the token follows the standard rule of expiry for personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#expires_at GroupServiceAccountAccessToken#expires_at}

---

##### `rotation_configuration`<sup>Optional</sup> <a name="rotation_configuration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.rotationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#rotation_configuration GroupServiceAccountAccessToken#rotation_configuration}

---

##### `validate_past_expiration_date`<sup>Optional</sup> <a name="validate_past_expiration_date" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.validatePastExpirationDate"></a>

- *Type:* bool | cdktf.IResolvable

Wether to validate if the expiration date is in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#validate_past_expiration_date GroupServiceAccountAccessToken#validate_past_expiration_date}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.putRotationConfiguration">put_rotation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetRotationConfiguration">reset_rotation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetValidatePastExpirationDate">reset_validate_past_expiration_date</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rotation_configuration` <a name="put_rotation_configuration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.putRotationConfiguration"></a>

```python
def put_rotation_configuration(
  rotate_before_days: typing.Union[int, float],
  expiration_days: typing.Union[int, float] = None
) -> None
```

###### `rotate_before_days`<sup>Required</sup> <a name="rotate_before_days" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.putRotationConfiguration.parameter.rotateBeforeDays"></a>

- *Type:* typing.Union[int, float]

The duration (in days) before the expiration when the token should be rotated.

As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#rotate_before_days GroupServiceAccountAccessToken#rotate_before_days}

---

###### `expiration_days`<sup>Optional</sup> <a name="expiration_days" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.putRotationConfiguration.parameter.expirationDays"></a>

- *Type:* typing.Union[int, float]

The duration (in days) the new token should be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#expiration_days GroupServiceAccountAccessToken#expiration_days}

---

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_rotation_configuration` <a name="reset_rotation_configuration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetRotationConfiguration"></a>

```python
def reset_rotation_configuration() -> None
```

##### `reset_validate_past_expiration_date` <a name="reset_validate_past_expiration_date" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetValidatePastExpirationDate"></a>

```python
def reset_validate_past_expiration_date() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupServiceAccountAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group_service_account_access_token

groupServiceAccountAccessToken.GroupServiceAccountAccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group_service_account_access_token

groupServiceAccountAccessToken.GroupServiceAccountAccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group_service_account_access_token

groupServiceAccountAccessToken.GroupServiceAccountAccessToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import group_service_account_access_token

groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupServiceAccountAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupServiceAccountAccessToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupServiceAccountAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupServiceAccountAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.revoked">revoked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.rotationConfiguration">rotation_configuration</a></code> | <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference">GroupServiceAccountAccessTokenRotationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.rotationConfigurationInput">rotation_configuration_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.validatePastExpirationDateInput">validate_past_expiration_date_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.validatePastExpirationDate">validate_past_expiration_date</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `revoked`<sup>Required</sup> <a name="revoked" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.revoked"></a>

```python
revoked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rotation_configuration`<sup>Required</sup> <a name="rotation_configuration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.rotationConfiguration"></a>

```python
rotation_configuration: GroupServiceAccountAccessTokenRotationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference">GroupServiceAccountAccessTokenRotationConfigurationOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rotation_configuration_input`<sup>Optional</sup> <a name="rotation_configuration_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.rotationConfigurationInput"></a>

```python
rotation_configuration_input: IResolvable | GroupServiceAccountAccessTokenRotationConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate_past_expiration_date_input`<sup>Optional</sup> <a name="validate_past_expiration_date_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.validatePastExpirationDateInput"></a>

```python
validate_past_expiration_date_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate_past_expiration_date`<sup>Required</sup> <a name="validate_past_expiration_date" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.validatePastExpirationDate"></a>

```python
validate_past_expiration_date: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupServiceAccountAccessTokenConfig <a name="GroupServiceAccountAccessTokenConfig" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_service_account_access_token

groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group: str,
  name: str,
  scopes: typing.List[str],
  user_id: typing.Union[int, float],
  expires_at: str = None,
  rotation_configuration: GroupServiceAccountAccessTokenRotationConfiguration = None,
  validate_past_expiration_date: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.group">group</a></code> | <code>str</code> | The ID or URL-encoded path of the group containing the service account. Must be a top level group. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.name">name</a></code> | <code>str</code> | The name of the personal access token. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The scopes of the group service account access token. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a service account user. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | The service account access token expiry date. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.rotationConfiguration">rotation_configuration</a></code> | <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.validatePastExpirationDate">validate_past_expiration_date</a></code> | <code>bool \| cdktf.IResolvable</code> | Wether to validate if the expiration date is in the future. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The ID or URL-encoded path of the group containing the service account. Must be a top level group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#group GroupServiceAccountAccessToken#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#name GroupServiceAccountAccessToken#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The scopes of the group service account access token.

Valid values are: `api`, `read_user`, `read_api`, `read_repository`, `write_repository`, `read_registry`, `write_registry`, `read_virtual_registry`, `write_virtual_registry`, `sudo`, `admin_mode`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `self_rotate`, `read_service_ping`. If `self_rotate` is included, you must also provide either `expires_at` or `rotation_configuration`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#scopes GroupServiceAccountAccessToken#scopes}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a service account user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#user_id GroupServiceAccountAccessToken#user_id}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

The service account access token expiry date.

When left blank, the token follows the standard rule of expiry for personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#expires_at GroupServiceAccountAccessToken#expires_at}

---

##### `rotation_configuration`<sup>Optional</sup> <a name="rotation_configuration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.rotationConfiguration"></a>

```python
rotation_configuration: GroupServiceAccountAccessTokenRotationConfiguration
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#rotation_configuration GroupServiceAccountAccessToken#rotation_configuration}

---

##### `validate_past_expiration_date`<sup>Optional</sup> <a name="validate_past_expiration_date" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.validatePastExpirationDate"></a>

```python
validate_past_expiration_date: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Wether to validate if the expiration date is in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#validate_past_expiration_date GroupServiceAccountAccessToken#validate_past_expiration_date}

---

### GroupServiceAccountAccessTokenRotationConfiguration <a name="GroupServiceAccountAccessTokenRotationConfiguration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_service_account_access_token

groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration(
  rotate_before_days: typing.Union[int, float],
  expiration_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.property.rotateBeforeDays">rotate_before_days</a></code> | <code>typing.Union[int, float]</code> | The duration (in days) before the expiration when the token should be rotated. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.property.expirationDays">expiration_days</a></code> | <code>typing.Union[int, float]</code> | The duration (in days) the new token should be valid for. |

---

##### `rotate_before_days`<sup>Required</sup> <a name="rotate_before_days" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.property.rotateBeforeDays"></a>

```python
rotate_before_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration (in days) before the expiration when the token should be rotated.

As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#rotate_before_days GroupServiceAccountAccessToken#rotate_before_days}

---

##### `expiration_days`<sup>Optional</sup> <a name="expiration_days" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.property.expirationDays"></a>

```python
expiration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration (in days) the new token should be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_service_account_access_token#expiration_days GroupServiceAccountAccessToken#expiration_days}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupServiceAccountAccessTokenRotationConfigurationOutputReference <a name="GroupServiceAccountAccessTokenRotationConfigurationOutputReference" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_service_account_access_token

groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resetExpirationDays">reset_expiration_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_days` <a name="reset_expiration_days" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resetExpirationDays"></a>

```python
def reset_expiration_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput">expiration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput">rotate_before_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.expirationDays">expiration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays">rotate_before_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_days_input`<sup>Optional</sup> <a name="expiration_days_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput"></a>

```python
expiration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotate_before_days_input`<sup>Optional</sup> <a name="rotate_before_days_input" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput"></a>

```python
rotate_before_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_days`<sup>Required</sup> <a name="expiration_days" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.expirationDays"></a>

```python
expiration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotate_before_days`<sup>Required</sup> <a name="rotate_before_days" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays"></a>

```python
rotate_before_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GroupServiceAccountAccessTokenRotationConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

---



