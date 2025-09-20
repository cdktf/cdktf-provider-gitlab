# `integrationHarbor` Submodule <a name="`integrationHarbor` Submodule" id="@cdktf/provider-gitlab.integrationHarbor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationHarbor <a name="IntegrationHarbor" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor gitlab_integration_harbor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_harbor

integrationHarbor.IntegrationHarbor(
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
  project_name: str,
  url: str,
  username: str,
  use_inherited_settings: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the GitLab project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.url">url</a></code> | <code>str</code> | Harbor URL. Example: `http://harbor.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.password"></a>

- *Type:* str

Password for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#password IntegrationHarbor#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.project"></a>

- *Type:* str

ID of the GitLab project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#project IntegrationHarbor#project}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.projectName"></a>

- *Type:* str

The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#project_name IntegrationHarbor#project_name}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.url"></a>

- *Type:* str

Harbor URL. Example: `http://harbor.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#url IntegrationHarbor#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.username"></a>

- *Type:* str

Username for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#username IntegrationHarbor#username}

---

##### `use_inherited_settings`<sup>Optional</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.Initializer.parameter.useInheritedSettings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#use_inherited_settings IntegrationHarbor#use_inherited_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.resetUseInheritedSettings">reset_use_inherited_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_use_inherited_settings` <a name="reset_use_inherited_settings" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.resetUseInheritedSettings"></a>

```python
def reset_use_inherited_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationHarbor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_harbor

integrationHarbor.IntegrationHarbor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_harbor

integrationHarbor.IntegrationHarbor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_harbor

integrationHarbor.IntegrationHarbor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_harbor

integrationHarbor.IntegrationHarbor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationHarbor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationHarbor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationHarbor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationHarbor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.useInheritedSettingsInput">use_inherited_settings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `use_inherited_settings_input`<sup>Optional</sup> <a name="use_inherited_settings_input" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.useInheritedSettingsInput"></a>

```python
use_inherited_settings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `use_inherited_settings`<sup>Required</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.useInheritedSettings"></a>

```python
use_inherited_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarbor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationHarborConfig <a name="IntegrationHarborConfig" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_harbor

integrationHarbor.IntegrationHarborConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  password: str,
  project: str,
  project_name: str,
  url: str,
  username: str,
  use_inherited_settings: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.password">password</a></code> | <code>str</code> | Password for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.project">project</a></code> | <code>str</code> | ID of the GitLab project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.projectName">project_name</a></code> | <code>str</code> | The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.url">url</a></code> | <code>str</code> | Harbor URL. Example: `http://harbor.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.username">username</a></code> | <code>str</code> | Username for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#password IntegrationHarbor#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the GitLab project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#project IntegrationHarbor#project}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#project_name IntegrationHarbor#project_name}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Harbor URL. Example: `http://harbor.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#url IntegrationHarbor#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#username IntegrationHarbor#username}

---

##### `use_inherited_settings`<sup>Optional</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.integrationHarbor.IntegrationHarborConfig.property.useInheritedSettings"></a>

```python
use_inherited_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/integration_harbor#use_inherited_settings IntegrationHarbor#use_inherited_settings}

---



