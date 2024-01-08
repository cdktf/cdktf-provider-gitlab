# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-gitlab.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-gitlab.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user gitlab_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import user

user.User(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  name: str,
  username: str,
  can_create_group: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_admin: typing.Union[bool, IResolvable] = None,
  is_external: typing.Union[bool, IResolvable] = None,
  namespace_id: typing.Union[int, float] = None,
  note: str = None,
  password: str = None,
  projects_limit: typing.Union[int, float] = None,
  reset_password: typing.Union[bool, IResolvable] = None,
  skip_confirmation: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.email">email</a></code> | <code>str</code> | The e-mail address of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.username">username</a></code> | <code>str</code> | The username of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.canCreateGroup">can_create_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to false. Whether to allow the user to create groups. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.isAdmin">is_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to false.  Whether to enable administrative privileges. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.isExternal">is_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user's namespace. Available since GitLab 14.10. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.note">note</a></code> | <code>str</code> | The note associated to the user. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.password">password</a></code> | <code>str</code> | The password of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.projectsLimit">projects_limit</a></code> | <code>typing.Union[int, float]</code> | Integer, defaults to 0.  Number of projects user can create. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.resetPassword">reset_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to false. Send user password reset link. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.skipConfirmation">skip_confirmation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to true. Whether to skip confirmation. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.state">state</a></code> | <code>str</code> | String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.email"></a>

- *Type:* str

The e-mail address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#email User#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.name"></a>

- *Type:* str

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#name User#name}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.username"></a>

- *Type:* str

The username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#username User#username}

---

##### `can_create_group`<sup>Optional</sup> <a name="can_create_group" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.canCreateGroup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to false. Whether to allow the user to create groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#can_create_group User#can_create_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_admin`<sup>Optional</sup> <a name="is_admin" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.isAdmin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to false.  Whether to enable administrative privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#is_admin User#is_admin}

---

##### `is_external`<sup>Optional</sup> <a name="is_external" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.isExternal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to false.

Whether a user has access only to some internal or private projects. External users can only access projects to which they are explicitly granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#is_external User#is_external}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.namespaceId"></a>

- *Type:* typing.Union[int, float]

The ID of the user's namespace. Available since GitLab 14.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#namespace_id User#namespace_id}

---

##### `note`<sup>Optional</sup> <a name="note" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.note"></a>

- *Type:* str

The note associated to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#note User#note}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.password"></a>

- *Type:* str

The password of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#password User#password}

---

##### `projects_limit`<sup>Optional</sup> <a name="projects_limit" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.projectsLimit"></a>

- *Type:* typing.Union[int, float]

Integer, defaults to 0.  Number of projects user can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#projects_limit User#projects_limit}

---

##### `reset_password`<sup>Optional</sup> <a name="reset_password" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.resetPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to false. Send user password reset link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#reset_password User#reset_password}

---

##### `skip_confirmation`<sup>Optional</sup> <a name="skip_confirmation" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.skipConfirmation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to true. Whether to skip confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#skip_confirmation User#skip_confirmation}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.state"></a>

- *Type:* str

String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#state User#state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.user.User.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.user.User.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.user.User.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetCanCreateGroup">reset_can_create_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetIsAdmin">reset_is_admin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetIsExternal">reset_is_external</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetNote">reset_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetProjectsLimit">reset_projects_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetResetPassword">reset_reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetSkipConfirmation">reset_skip_confirmation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetTfPassword">reset_tf_password</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.user.User.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.user.User.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.user.User.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.user.User.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.user.User.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.user.User.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.user.User.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_can_create_group` <a name="reset_can_create_group" id="@cdktf/provider-gitlab.user.User.resetCanCreateGroup"></a>

```python
def reset_can_create_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.user.User.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_admin` <a name="reset_is_admin" id="@cdktf/provider-gitlab.user.User.resetIsAdmin"></a>

```python
def reset_is_admin() -> None
```

##### `reset_is_external` <a name="reset_is_external" id="@cdktf/provider-gitlab.user.User.resetIsExternal"></a>

```python
def reset_is_external() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktf/provider-gitlab.user.User.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_note` <a name="reset_note" id="@cdktf/provider-gitlab.user.User.resetNote"></a>

```python
def reset_note() -> None
```

##### `reset_projects_limit` <a name="reset_projects_limit" id="@cdktf/provider-gitlab.user.User.resetProjectsLimit"></a>

```python
def reset_projects_limit() -> None
```

##### `reset_reset_password` <a name="reset_reset_password" id="@cdktf/provider-gitlab.user.User.resetResetPassword"></a>

```python
def reset_reset_password() -> None
```

##### `reset_skip_confirmation` <a name="reset_skip_confirmation" id="@cdktf/provider-gitlab.user.User.resetSkipConfirmation"></a>

```python
def reset_skip_confirmation() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-gitlab.user.User.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tf_password` <a name="reset_tf_password" id="@cdktf/provider-gitlab.user.User.resetTfPassword"></a>

```python
def reset_tf_password() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import user

user.User.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.user.User.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import user

user.User.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the User to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.canCreateGroupInput">can_create_group_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isAdminInput">is_admin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isExternalInput">is_external_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.namespaceIdInput">namespace_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.noteInput">note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.projectsLimitInput">projects_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.resetPasswordInput">reset_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.skipConfirmationInput">skip_confirmation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.canCreateGroup">can_create_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isAdmin">is_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isExternal">is_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.note">note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.projectsLimit">projects_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.resetPassword">reset_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.skipConfirmation">skip_confirmation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `can_create_group_input`<sup>Optional</sup> <a name="can_create_group_input" id="@cdktf/provider-gitlab.user.User.property.canCreateGroupInput"></a>

```python
can_create_group_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-gitlab.user.User.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.user.User.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_admin_input`<sup>Optional</sup> <a name="is_admin_input" id="@cdktf/provider-gitlab.user.User.property.isAdminInput"></a>

```python
is_admin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_external_input`<sup>Optional</sup> <a name="is_external_input" id="@cdktf/provider-gitlab.user.User.property.isExternalInput"></a>

```python
is_external_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.user.User.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-gitlab.user.User.property.namespaceIdInput"></a>

```python
namespace_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `note_input`<sup>Optional</sup> <a name="note_input" id="@cdktf/provider-gitlab.user.User.property.noteInput"></a>

```python
note_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-gitlab.user.User.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `projects_limit_input`<sup>Optional</sup> <a name="projects_limit_input" id="@cdktf/provider-gitlab.user.User.property.projectsLimitInput"></a>

```python
projects_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reset_password_input`<sup>Optional</sup> <a name="reset_password_input" id="@cdktf/provider-gitlab.user.User.property.resetPasswordInput"></a>

```python
reset_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_confirmation_input`<sup>Optional</sup> <a name="skip_confirmation_input" id="@cdktf/provider-gitlab.user.User.property.skipConfirmationInput"></a>

```python
skip_confirmation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-gitlab.user.User.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.user.User.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `can_create_group`<sup>Required</sup> <a name="can_create_group" id="@cdktf/provider-gitlab.user.User.property.canCreateGroup"></a>

```python
can_create_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.user.User.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_admin`<sup>Required</sup> <a name="is_admin" id="@cdktf/provider-gitlab.user.User.property.isAdmin"></a>

```python
is_admin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_external`<sup>Required</sup> <a name="is_external" id="@cdktf/provider-gitlab.user.User.property.isExternal"></a>

```python
is_external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.user.User.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.user.User.property.namespaceId"></a>

```python
namespace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-gitlab.user.User.property.note"></a>

```python
note: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.user.User.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `projects_limit`<sup>Required</sup> <a name="projects_limit" id="@cdktf/provider-gitlab.user.User.property.projectsLimit"></a>

```python
projects_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reset_password`<sup>Required</sup> <a name="reset_password" id="@cdktf/provider-gitlab.user.User.property.resetPassword"></a>

```python
reset_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_confirmation`<sup>Required</sup> <a name="skip_confirmation" id="@cdktf/provider-gitlab.user.User.property.skipConfirmation"></a>

```python
skip_confirmation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.user.User.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.user.User.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-gitlab.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  name: str,
  username: str,
  can_create_group: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_admin: typing.Union[bool, IResolvable] = None,
  is_external: typing.Union[bool, IResolvable] = None,
  namespace_id: typing.Union[int, float] = None,
  note: str = None,
  password: str = None,
  projects_limit: typing.Union[int, float] = None,
  reset_password: typing.Union[bool, IResolvable] = None,
  skip_confirmation: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.email">email</a></code> | <code>str</code> | The e-mail address of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.name">name</a></code> | <code>str</code> | The name of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.username">username</a></code> | <code>str</code> | The username of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.canCreateGroup">can_create_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to false. Whether to allow the user to create groups. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.isAdmin">is_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to false.  Whether to enable administrative privileges. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.isExternal">is_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user's namespace. Available since GitLab 14.10. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.note">note</a></code> | <code>str</code> | The note associated to the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.password">password</a></code> | <code>str</code> | The password of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.projectsLimit">projects_limit</a></code> | <code>typing.Union[int, float]</code> | Integer, defaults to 0.  Number of projects user can create. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.resetPassword">reset_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to false. Send user password reset link. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.skipConfirmation">skip_confirmation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean, defaults to true. Whether to skip confirmation. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.state">state</a></code> | <code>str</code> | String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.user.UserConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The e-mail address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#email User#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.user.UserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#name User#name}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.user.UserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#username User#username}

---

##### `can_create_group`<sup>Optional</sup> <a name="can_create_group" id="@cdktf/provider-gitlab.user.UserConfig.property.canCreateGroup"></a>

```python
can_create_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to false. Whether to allow the user to create groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#can_create_group User#can_create_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.user.UserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_admin`<sup>Optional</sup> <a name="is_admin" id="@cdktf/provider-gitlab.user.UserConfig.property.isAdmin"></a>

```python
is_admin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to false.  Whether to enable administrative privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#is_admin User#is_admin}

---

##### `is_external`<sup>Optional</sup> <a name="is_external" id="@cdktf/provider-gitlab.user.UserConfig.property.isExternal"></a>

```python
is_external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to false.

Whether a user has access only to some internal or private projects. External users can only access projects to which they are explicitly granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#is_external User#is_external}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.user.UserConfig.property.namespaceId"></a>

```python
namespace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user's namespace. Available since GitLab 14.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#namespace_id User#namespace_id}

---

##### `note`<sup>Optional</sup> <a name="note" id="@cdktf/provider-gitlab.user.UserConfig.property.note"></a>

```python
note: str
```

- *Type:* str

The note associated to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#note User#note}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.user.UserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#password User#password}

---

##### `projects_limit`<sup>Optional</sup> <a name="projects_limit" id="@cdktf/provider-gitlab.user.UserConfig.property.projectsLimit"></a>

```python
projects_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer, defaults to 0.  Number of projects user can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#projects_limit User#projects_limit}

---

##### `reset_password`<sup>Optional</sup> <a name="reset_password" id="@cdktf/provider-gitlab.user.UserConfig.property.resetPassword"></a>

```python
reset_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to false. Send user password reset link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#reset_password User#reset_password}

---

##### `skip_confirmation`<sup>Optional</sup> <a name="skip_confirmation" id="@cdktf/provider-gitlab.user.UserConfig.property.skipConfirmation"></a>

```python
skip_confirmation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean, defaults to true. Whether to skip confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#skip_confirmation User#skip_confirmation}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.user.UserConfig.property.state"></a>

```python
state: str
```

- *Type:* str

String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user#state User#state}

---



