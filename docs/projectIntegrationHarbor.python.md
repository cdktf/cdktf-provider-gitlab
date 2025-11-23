# `projectIntegrationHarbor` Submodule <a name="`projectIntegrationHarbor` Submodule" id="@cdktf/provider-gitlab.projectIntegrationHarbor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationHarbor <a name="ProjectIntegrationHarbor" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor gitlab_project_integration_harbor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_harbor

projectIntegrationHarbor.ProjectIntegrationHarbor(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  password: str,
  project: str,
  project_name: str,
  url: str,
  username: str,
  use_inherited_settings: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the GitLab project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.url">url</a></code> | <code>str</code> | Harbor URL. Example: `http://harbor.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.useInheritedSettings">use_inherited_settings</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.password"></a>

- *Type:* str

Password for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#password ProjectIntegrationHarbor#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.project"></a>

- *Type:* str

ID of the GitLab project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#project ProjectIntegrationHarbor#project}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.projectName"></a>

- *Type:* str

The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#project_name ProjectIntegrationHarbor#project_name}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.url"></a>

- *Type:* str

Harbor URL. Example: `http://harbor.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#url ProjectIntegrationHarbor#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.username"></a>

- *Type:* str

Username for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#username ProjectIntegrationHarbor#username}

---

##### `use_inherited_settings`<sup>Optional</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.useInheritedSettings"></a>

- *Type:* bool | cdktf.IResolvable

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#use_inherited_settings ProjectIntegrationHarbor#use_inherited_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.resetUseInheritedSettings">reset_use_inherited_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_use_inherited_settings` <a name="reset_use_inherited_settings" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.resetUseInheritedSettings"></a>

```python
def reset_use_inherited_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectIntegrationHarbor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_harbor

projectIntegrationHarbor.ProjectIntegrationHarbor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_harbor

projectIntegrationHarbor.ProjectIntegrationHarbor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_harbor

projectIntegrationHarbor.ProjectIntegrationHarbor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_harbor

projectIntegrationHarbor.ProjectIntegrationHarbor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectIntegrationHarbor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectIntegrationHarbor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectIntegrationHarbor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationHarbor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.useInheritedSettingsInput">use_inherited_settings_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.useInheritedSettings">use_inherited_settings</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `use_inherited_settings_input`<sup>Optional</sup> <a name="use_inherited_settings_input" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.useInheritedSettingsInput"></a>

```python
use_inherited_settings_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `use_inherited_settings`<sup>Required</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.useInheritedSettings"></a>

```python
use_inherited_settings: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationHarborConfig <a name="ProjectIntegrationHarborConfig" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_harbor

projectIntegrationHarbor.ProjectIntegrationHarborConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  password: str,
  project: str,
  project_name: str,
  url: str,
  username: str,
  use_inherited_settings: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.password">password</a></code> | <code>str</code> | Password for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.project">project</a></code> | <code>str</code> | ID of the GitLab project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.projectName">project_name</a></code> | <code>str</code> | The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.url">url</a></code> | <code>str</code> | Harbor URL. Example: `http://harbor.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.username">username</a></code> | <code>str</code> | Username for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.useInheritedSettings">use_inherited_settings</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#password ProjectIntegrationHarbor#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the GitLab project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#project ProjectIntegrationHarbor#project}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#project_name ProjectIntegrationHarbor#project_name}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Harbor URL. Example: `http://harbor.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#url ProjectIntegrationHarbor#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#username ProjectIntegrationHarbor#username}

---

##### `use_inherited_settings`<sup>Optional</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.useInheritedSettings"></a>

```python
use_inherited_settings: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#use_inherited_settings ProjectIntegrationHarbor#use_inherited_settings}

---



