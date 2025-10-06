# `dataGitlabGroupMembership` Submodule <a name="`dataGitlabGroupMembership` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupMembership <a name="DataGitlabGroupMembership" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership gitlab_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembership(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_level: str = None,
  full_path: str = None,
  group_id: typing.Union[int, float] = None,
  inherited: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Only return members with the desired access level. Acceptable values are: `guest`, `reporter`, `developer`, `maintainer`, `owner`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.fullPath">full_path</a></code> | <code>str</code> | The full path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.inherited">inherited</a></code> | <code>bool \| cdktf.IResolvable</code> | Return all project members including members through ancestor groups. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.accessLevel"></a>

- *Type:* str

Only return members with the desired access level. Acceptable values are: `guest`, `reporter`, `developer`, `maintainer`, `owner`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#access_level DataGitlabGroupMembership#access_level}

---

##### `full_path`<sup>Optional</sup> <a name="full_path" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.fullPath"></a>

- *Type:* str

The full path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#full_path DataGitlabGroupMembership#full_path}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.groupId"></a>

- *Type:* typing.Union[int, float]

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#group_id DataGitlabGroupMembership#group_id}

---

##### `inherited`<sup>Optional</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.Initializer.parameter.inherited"></a>

- *Type:* bool | cdktf.IResolvable

Return all project members including members through ancestor groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#inherited DataGitlabGroupMembership#inherited}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetFullPath">reset_full_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetInherited">reset_inherited</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_full_path` <a name="reset_full_path" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetFullPath"></a>

```python
def reset_full_path() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_inherited` <a name="reset_inherited" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.resetInherited"></a>

```python
def reset_inherited() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabGroupMembership resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembership.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembership.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabGroupMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabGroupMembership to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.members">members</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList">DataGitlabGroupMembershipMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.fullPathInput">full_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.inheritedInput">inherited_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.fullPath">full_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.inherited">inherited</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.members"></a>

```python
members: DataGitlabGroupMembershipMembersList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList">DataGitlabGroupMembershipMembersList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `full_path_input`<sup>Optional</sup> <a name="full_path_input" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.fullPathInput"></a>

```python
full_path_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inherited_input`<sup>Optional</sup> <a name="inherited_input" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.inheritedInput"></a>

```python
inherited_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `full_path`<sup>Required</sup> <a name="full_path" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.fullPath"></a>

```python
full_path: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.inherited"></a>

```python
inherited: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupMembershipConfig <a name="DataGitlabGroupMembershipConfig" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembershipConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_level: str = None,
  full_path: str = None,
  group_id: typing.Union[int, float] = None,
  inherited: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Only return members with the desired access level. Acceptable values are: `guest`, `reporter`, `developer`, `maintainer`, `owner`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.fullPath">full_path</a></code> | <code>str</code> | The full path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.inherited">inherited</a></code> | <code>bool \| cdktf.IResolvable</code> | Return all project members including members through ancestor groups. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Only return members with the desired access level. Acceptable values are: `guest`, `reporter`, `developer`, `maintainer`, `owner`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#access_level DataGitlabGroupMembership#access_level}

---

##### `full_path`<sup>Optional</sup> <a name="full_path" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.fullPath"></a>

```python
full_path: str
```

- *Type:* str

The full path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#full_path DataGitlabGroupMembership#full_path}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#group_id DataGitlabGroupMembership#group_id}

---

##### `inherited`<sup>Optional</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipConfig.property.inherited"></a>

```python
inherited: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Return all project members including members through ancestor groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/group_membership#inherited DataGitlabGroupMembership#inherited}

---

### DataGitlabGroupMembershipMembers <a name="DataGitlabGroupMembershipMembers" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembershipMembers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupMembershipMembersList <a name="DataGitlabGroupMembershipMembersList" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabGroupMembershipMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabGroupMembershipMembersOutputReference <a name="DataGitlabGroupMembershipMembersOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_membership

dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembers">DataGitlabGroupMembershipMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabGroupMembershipMembers
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupMembership.DataGitlabGroupMembershipMembers">DataGitlabGroupMembershipMembers</a>

---



