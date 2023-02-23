# `groupShareGroup` Submodule <a name="`groupShareGroup` Submodule" id="@cdktf/provider-gitlab.groupShareGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupShareGroup <a name="GroupShareGroup" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group gitlab_group_share_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_share_group

groupShareGroup.GroupShareGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_access: str,
  group_id: str,
  share_group_id: typing.Union[int, float],
  expires_at: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.groupAccess">group_access</a></code> | <code>str</code> | The access level to grant the group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | The id of the main group to be shared. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.shareGroupId">share_group_id</a></code> | <code>typing.Union[int, float]</code> | The id of the additional group with which the main group will be shared. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | Share expiration date. Format: `YYYY-MM-DD`. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#id GroupShareGroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_access`<sup>Required</sup> <a name="group_access" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.groupAccess"></a>

- *Type:* str

The access level to grant the group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#group_access GroupShareGroup#group_access}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.groupId"></a>

- *Type:* str

The id of the main group to be shared.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#group_id GroupShareGroup#group_id}

---

##### `share_group_id`<sup>Required</sup> <a name="share_group_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.shareGroupId"></a>

- *Type:* typing.Union[int, float]

The id of the additional group with which the main group will be shared.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#share_group_id GroupShareGroup#share_group_id}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.expiresAt"></a>

- *Type:* str

Share expiration date. Format: `YYYY-MM-DD`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#expires_at GroupShareGroup#expires_at}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#id GroupShareGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group_share_group

groupShareGroup.GroupShareGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group_share_group

groupShareGroup.GroupShareGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group_share_group

groupShareGroup.GroupShareGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.groupAccessInput">group_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.shareGroupIdInput">share_group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.groupAccess">group_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.shareGroupId">share_group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `group_access_input`<sup>Optional</sup> <a name="group_access_input" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.groupAccessInput"></a>

```python
group_access_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `share_group_id_input`<sup>Optional</sup> <a name="share_group_id_input" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.shareGroupIdInput"></a>

```python
share_group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `group_access`<sup>Required</sup> <a name="group_access" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.groupAccess"></a>

```python
group_access: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `share_group_id`<sup>Required</sup> <a name="share_group_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.shareGroupId"></a>

```python
share_group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupShareGroupConfig <a name="GroupShareGroupConfig" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_share_group

groupShareGroup.GroupShareGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_access: str,
  group_id: str,
  share_group_id: typing.Union[int, float],
  expires_at: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.groupAccess">group_access</a></code> | <code>str</code> | The access level to grant the group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.groupId">group_id</a></code> | <code>str</code> | The id of the main group to be shared. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.shareGroupId">share_group_id</a></code> | <code>typing.Union[int, float]</code> | The id of the additional group with which the main group will be shared. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | Share expiration date. Format: `YYYY-MM-DD`. |
| <code><a href="#@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#id GroupShareGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_access`<sup>Required</sup> <a name="group_access" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.groupAccess"></a>

```python
group_access: str
```

- *Type:* str

The access level to grant the group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#group_access GroupShareGroup#group_access}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The id of the main group to be shared.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#group_id GroupShareGroup#group_id}

---

##### `share_group_id`<sup>Required</sup> <a name="share_group_id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.shareGroupId"></a>

```python
share_group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The id of the additional group with which the main group will be shared.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#share_group_id GroupShareGroup#share_group_id}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

Share expiration date. Format: `YYYY-MM-DD`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#expires_at GroupShareGroup#expires_at}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupShareGroup.GroupShareGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_share_group#id GroupShareGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


