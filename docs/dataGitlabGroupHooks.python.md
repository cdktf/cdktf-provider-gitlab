# `dataGitlabGroupHooks` Submodule <a name="`dataGitlabGroupHooks` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupHooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupHooks <a name="DataGitlabGroupHooks" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_hooks gitlab_group_hooks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooks(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.group">group</a></code> | <code>str</code> | The ID or full path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_hooks#id DataGitlabGroupHooks#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.group"></a>

- *Type:* str

The ID or full path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_hooks#group DataGitlabGroupHooks#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_hooks#id DataGitlabGroupHooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabGroupHooks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabGroupHooks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabGroupHooks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabGroupHooks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_hooks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupHooks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.hooks">hooks</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList">DataGitlabGroupHooksHooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.hooks"></a>

```python
hooks: DataGitlabGroupHooksHooksList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList">DataGitlabGroupHooksHooksList</a>

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupHooksConfig <a name="DataGitlabGroupHooksConfig" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.group">group</a></code> | <code>str</code> | The ID or full path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_hooks#id DataGitlabGroupHooks#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The ID or full path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_hooks#group DataGitlabGroupHooks#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_hooks#id DataGitlabGroupHooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGitlabGroupHooksHooks <a name="DataGitlabGroupHooksHooks" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooks.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooksHooks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupHooksHooksList <a name="DataGitlabGroupHooksHooksList" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooksHooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabGroupHooksHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabGroupHooksHooksOutputReference <a name="DataGitlabGroupHooksHooksOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_hooks

dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.confidentialIssuesEvents">confidential_issues_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.confidentialNoteEvents">confidential_note_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.customWebhookTemplate">custom_webhook_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.deploymentEvents">deployment_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.enableSslVerification">enable_ssl_verification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.hookId">hook_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.issuesEvents">issues_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.jobEvents">job_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.noteEvents">note_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.pipelineEvents">pipeline_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.pushEvents">push_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.pushEventsBranchFilter">push_events_branch_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.releasesEvents">releases_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.subgroupEvents">subgroup_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.tagPushEvents">tag_push_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.wikiPageEvents">wiki_page_events</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooks">DataGitlabGroupHooksHooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidential_issues_events`<sup>Required</sup> <a name="confidential_issues_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.confidentialIssuesEvents"></a>

```python
confidential_issues_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `confidential_note_events`<sup>Required</sup> <a name="confidential_note_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.confidentialNoteEvents"></a>

```python
confidential_note_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `custom_webhook_template`<sup>Required</sup> <a name="custom_webhook_template" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.customWebhookTemplate"></a>

```python
custom_webhook_template: str
```

- *Type:* str

---

##### `deployment_events`<sup>Required</sup> <a name="deployment_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.deploymentEvents"></a>

```python
deployment_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_ssl_verification`<sup>Required</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.enableSslVerification"></a>

```python
enable_ssl_verification: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.hookId"></a>

```python
hook_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issues_events`<sup>Required</sup> <a name="issues_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.issuesEvents"></a>

```python
issues_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `job_events`<sup>Required</sup> <a name="job_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.jobEvents"></a>

```python
job_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.mergeRequestsEvents"></a>

```python
merge_requests_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `note_events`<sup>Required</sup> <a name="note_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.noteEvents"></a>

```python
note_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pipeline_events`<sup>Required</sup> <a name="pipeline_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.pipelineEvents"></a>

```python
pipeline_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.pushEvents"></a>

```python
push_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `push_events_branch_filter`<sup>Required</sup> <a name="push_events_branch_filter" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.pushEventsBranchFilter"></a>

```python
push_events_branch_filter: str
```

- *Type:* str

---

##### `releases_events`<sup>Required</sup> <a name="releases_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.releasesEvents"></a>

```python
releases_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `subgroup_events`<sup>Required</sup> <a name="subgroup_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.subgroupEvents"></a>

```python
subgroup_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.tagPushEvents"></a>

```python
tag_push_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `wiki_page_events`<sup>Required</sup> <a name="wiki_page_events" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.wikiPageEvents"></a>

```python
wiki_page_events: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooksOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabGroupHooksHooks
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupHooks.DataGitlabGroupHooksHooks">DataGitlabGroupHooksHooks</a>

---



