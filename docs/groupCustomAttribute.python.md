# `gitlab_group_custom_attribute`

Refer to the Terraform Registory for docs: [`gitlab_group_custom_attribute`](https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute).

# `groupCustomAttribute` Submodule <a name="`groupCustomAttribute` Submodule" id="@cdktf/provider-gitlab.groupCustomAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupCustomAttribute <a name="GroupCustomAttribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute gitlab_group_custom_attribute}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_custom_attribute

groupCustomAttribute.GroupCustomAttribute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: typing.Union[int, float],
  key: str,
  value: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.group">group</a></code> | <code>typing.Union[int, float]</code> | The id of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.key">key</a></code> | <code>str</code> | Key for the Custom Attribute. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.value">value</a></code> | <code>str</code> | Value for the Custom Attribute. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#id GroupCustomAttribute#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.group"></a>

- *Type:* typing.Union[int, float]

The id of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#group GroupCustomAttribute#group}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.key"></a>

- *Type:* str

Key for the Custom Attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#key GroupCustomAttribute#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.value"></a>

- *Type:* str

Value for the Custom Attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#value GroupCustomAttribute#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#id GroupCustomAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group_custom_attribute

groupCustomAttribute.GroupCustomAttribute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group_custom_attribute

groupCustomAttribute.GroupCustomAttribute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group_custom_attribute

groupCustomAttribute.GroupCustomAttribute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.groupInput">group_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.group">group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.groupInput"></a>

```python
group_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.group"></a>

```python
group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttribute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupCustomAttributeConfig <a name="GroupCustomAttributeConfig" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_custom_attribute

groupCustomAttribute.GroupCustomAttributeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: typing.Union[int, float],
  key: str,
  value: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.group">group</a></code> | <code>typing.Union[int, float]</code> | The id of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.key">key</a></code> | <code>str</code> | Key for the Custom Attribute. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.value">value</a></code> | <code>str</code> | Value for the Custom Attribute. |
| <code><a href="#@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#id GroupCustomAttribute#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.group"></a>

```python
group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The id of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#group GroupCustomAttribute#group}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Key for the Custom Attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#key GroupCustomAttribute#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Value for the Custom Attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#value GroupCustomAttribute#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupCustomAttribute.GroupCustomAttributeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_custom_attribute#id GroupCustomAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



