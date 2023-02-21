# `dataGitlabUser` Submodule <a name="`dataGitlabUser` Submodule" id="@cdktf/provider-gitlab.dataGitlabUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabUser <a name="DataGitlabUser" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/user gitlab_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_user

dataGitlabUser.DataGitlabUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str = None,
  id: str = None,
  namespace_id: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.email">email</a></code> | <code>str</code> | The public email address of the user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#id DataGitlabUser#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user's namespace. Requires admin token to access this field. Available since GitLab 14.10. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.username">username</a></code> | <code>str</code> | The username of the user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.email"></a>

- *Type:* str

The public email address of the user.

**Note**: before GitLab 14.8 the lookup was based on the users primary email address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#email DataGitlabUser#email}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#id DataGitlabUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.namespaceId"></a>

- *Type:* typing.Union[int, float]

The ID of the user's namespace. Requires admin token to access this field. Available since GitLab 14.10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#namespace_id DataGitlabUser#namespace_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.userId"></a>

- *Type:* typing.Union[int, float]

The ID of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#user_id DataGitlabUser#user_id}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.Initializer.parameter.username"></a>

- *Type:* str

The username of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#username DataGitlabUser#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetUserId">reset_user_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_email` <a name="reset_email" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetUserId"></a>

```python
def reset_user_id() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_user

dataGitlabUser.DataGitlabUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_user

dataGitlabUser.DataGitlabUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_user

dataGitlabUser.DataGitlabUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.bio">bio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.canCreateGroup">can_create_group</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.canCreateProject">can_create_project</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.colorSchemeId">color_scheme_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.currentSignInAt">current_sign_in_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.external">external</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.externUid">extern_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.isAdmin">is_admin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.lastSignInAt">last_sign_in_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.linkedin">linkedin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.note">note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.projectsLimit">projects_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.skype">skype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.themeId">theme_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.twitter">twitter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.twoFactorEnabled">two_factor_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.userProvider">user_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.websiteUrl">website_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.namespaceIdInput">namespace_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `bio`<sup>Required</sup> <a name="bio" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.bio"></a>

```python
bio: str
```

- *Type:* str

---

##### `can_create_group`<sup>Required</sup> <a name="can_create_group" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.canCreateGroup"></a>

```python
can_create_group: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `can_create_project`<sup>Required</sup> <a name="can_create_project" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.canCreateProject"></a>

```python
can_create_project: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `color_scheme_id`<sup>Required</sup> <a name="color_scheme_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.colorSchemeId"></a>

```python
color_scheme_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `current_sign_in_at`<sup>Required</sup> <a name="current_sign_in_at" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.currentSignInAt"></a>

```python
current_sign_in_at: str
```

- *Type:* str

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.external"></a>

```python
external: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `extern_uid`<sup>Required</sup> <a name="extern_uid" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.externUid"></a>

```python
extern_uid: str
```

- *Type:* str

---

##### `is_admin`<sup>Required</sup> <a name="is_admin" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.isAdmin"></a>

```python
is_admin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_sign_in_at`<sup>Required</sup> <a name="last_sign_in_at" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.lastSignInAt"></a>

```python
last_sign_in_at: str
```

- *Type:* str

---

##### `linkedin`<sup>Required</sup> <a name="linkedin" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.linkedin"></a>

```python
linkedin: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.note"></a>

```python
note: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `projects_limit`<sup>Required</sup> <a name="projects_limit" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.projectsLimit"></a>

```python
projects_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skype`<sup>Required</sup> <a name="skype" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.skype"></a>

```python
skype: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.themeId"></a>

```python
theme_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.twitter"></a>

```python
twitter: str
```

- *Type:* str

---

##### `two_factor_enabled`<sup>Required</sup> <a name="two_factor_enabled" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.twoFactorEnabled"></a>

```python
two_factor_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `user_provider`<sup>Required</sup> <a name="user_provider" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.userProvider"></a>

```python
user_provider: str
```

- *Type:* str

---

##### `website_url`<sup>Required</sup> <a name="website_url" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.websiteUrl"></a>

```python
website_url: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.namespaceIdInput"></a>

```python
namespace_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.namespaceId"></a>

```python
namespace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabUserConfig <a name="DataGitlabUserConfig" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_user

dataGitlabUser.DataGitlabUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str = None,
  id: str = None,
  namespace_id: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.email">email</a></code> | <code>str</code> | The public email address of the user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#id DataGitlabUser#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user's namespace. Requires admin token to access this field. Available since GitLab 14.10. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.username">username</a></code> | <code>str</code> | The username of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The public email address of the user.

**Note**: before GitLab 14.8 the lookup was based on the users primary email address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#email DataGitlabUser#email}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#id DataGitlabUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.namespaceId"></a>

```python
namespace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user's namespace. Requires admin token to access this field. Available since GitLab 14.10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#namespace_id DataGitlabUser#namespace_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#user_id DataGitlabUser#user_id}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUser.DataGitlabUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#username DataGitlabUser#username}

---



