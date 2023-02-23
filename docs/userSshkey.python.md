# `userSshkey` Submodule <a name="`userSshkey` Submodule" id="@cdktf/provider-gitlab.userSshkey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserSshkey <a name="UserSshkey" id="@cdktf/provider-gitlab.userSshkey.UserSshkey"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey gitlab_user_sshkey}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import user_sshkey

userSshkey.UserSshkey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  title: str,
  user_id: typing.Union[int, float],
  expires_at: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.key">key</a></code> | <code>str</code> | The ssh key. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the ssh key. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID or username of the user. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | The expiration date of the SSH key in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#id UserSshkey#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.key"></a>

- *Type:* str

The ssh key.

The SSH key `comment` (trailing part) is optional and ignored for diffing, because GitLab overrides it with the username and GitLab hostname.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#key UserSshkey#key}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.title"></a>

- *Type:* str

The title of the ssh key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#title UserSshkey#title}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.userId"></a>

- *Type:* typing.Union[int, float]

The ID or username of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#user_id UserSshkey#user_id}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.expiresAt"></a>

- *Type:* str

The expiration date of the SSH key in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#expires_at UserSshkey#expires_at}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#id UserSshkey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import user_sshkey

userSshkey.UserSshkey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import user_sshkey

userSshkey.UserSshkey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import user_sshkey

userSshkey.UserSshkey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.keyId">key_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.keyId"></a>

```python
key_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.userSshkey.UserSshkey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserSshkeyConfig <a name="UserSshkeyConfig" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import user_sshkey

userSshkey.UserSshkeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  title: str,
  user_id: typing.Union[int, float],
  expires_at: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.key">key</a></code> | <code>str</code> | The ssh key. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.title">title</a></code> | <code>str</code> | The title of the ssh key. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID or username of the user. |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | The expiration date of the SSH key in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#id UserSshkey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The ssh key.

The SSH key `comment` (trailing part) is optional and ignored for diffing, because GitLab overrides it with the username and GitLab hostname.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#key UserSshkey#key}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the ssh key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#title UserSshkey#title}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID or username of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#user_id UserSshkey#user_id}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

The expiration date of the SSH key in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#expires_at UserSshkey#expires_at}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.userSshkey.UserSshkeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user_sshkey#id UserSshkey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


