# `dataGitlabInstanceDeployKeys` Submodule <a name="`dataGitlabInstanceDeployKeys` Submodule" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabInstanceDeployKeys <a name="DataGitlabInstanceDeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/instance_deploy_keys gitlab_instance_deploy_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  public: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.public">public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only return deploy keys that are public. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.public"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only return deploy keys that are public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/instance_deploy_keys#public DataGitlabInstanceDeployKeys#public}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetPublic">reset_public</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_public` <a name="reset_public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetPublic"></a>

```python
def reset_public() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabInstanceDeployKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabInstanceDeployKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabInstanceDeployKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabInstanceDeployKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/instance_deploy_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabInstanceDeployKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.deployKeys">deploy_keys</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList">DataGitlabInstanceDeployKeysDeployKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.publicInput">public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.public">public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deploy_keys`<sup>Required</sup> <a name="deploy_keys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.deployKeys"></a>

```python
deploy_keys: DataGitlabInstanceDeployKeysDeployKeysList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList">DataGitlabInstanceDeployKeysDeployKeysList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `public_input`<sup>Optional</sup> <a name="public_input" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.publicInput"></a>

```python
public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.public"></a>

```python
public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabInstanceDeployKeysConfig <a name="DataGitlabInstanceDeployKeysConfig" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  public: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.public">public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only return deploy keys that are public. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.public"></a>

```python
public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only return deploy keys that are public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/instance_deploy_keys#public DataGitlabInstanceDeployKeys#public}

---

### DataGitlabInstanceDeployKeysDeployKeys <a name="DataGitlabInstanceDeployKeysDeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys()
```


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabInstanceDeployKeysDeployKeysList <a name="DataGitlabInstanceDeployKeysDeployKeysList" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabInstanceDeployKeysDeployKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabInstanceDeployKeysDeployKeysOutputReference <a name="DataGitlabInstanceDeployKeysDeployKeysOutputReference" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.projectsWithWriteAccess">projects_with_write_access</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys">DataGitlabInstanceDeployKeysDeployKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `projects_with_write_access`<sup>Required</sup> <a name="projects_with_write_access" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.projectsWithWriteAccess"></a>

```python
projects_with_write_access: DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabInstanceDeployKeysDeployKeys
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys">DataGitlabInstanceDeployKeysDeployKeys</a>

---


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_instance_deploy_keys

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.nameWithNamespace">name_with_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.pathWithNamespace">path_with_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_with_namespace`<sup>Required</sup> <a name="name_with_namespace" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.nameWithNamespace"></a>

```python
name_with_namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_with_namespace`<sup>Required</sup> <a name="path_with_namespace" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.pathWithNamespace"></a>

```python
path_with_namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess</a>

---



