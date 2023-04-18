# `gitlab_deploy_token`

Refer to the Terraform Registory for docs: [`gitlab_deploy_token`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token).

# `deployToken` Submodule <a name="`deployToken` Submodule" id="@cdktf/provider-gitlab.deployToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeployToken <a name="DeployToken" id="@cdktf/provider-gitlab.deployToken.DeployToken"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token gitlab_deploy_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import deploy_token

deployToken.DeployToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  scopes: typing.List[str],
  expires_at: str = None,
  group: str = None,
  id: str = None,
  project: str = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.name">name</a></code> | <code>str</code> | A name to describe the deploy token with. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Valid values: `read_repository`, `read_registry`, `read_package_registry`, `write_registry`, `write_package_registry`. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | Time the token will expire it, RFC3339 format. Will not expire per default. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.group">group</a></code> | <code>str</code> | The name or id of the group to add the deploy token to. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#id DeployToken#id}. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.project">project</a></code> | <code>str</code> | The name or id of the project to add the deploy token to. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.username">username</a></code> | <code>str</code> | A username for the deploy token. Default is `gitlab+deploy-token-{n}`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.name"></a>

- *Type:* str

A name to describe the deploy token with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#name DeployToken#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Valid values: `read_repository`, `read_registry`, `read_package_registry`, `write_registry`, `write_package_registry`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#scopes DeployToken#scopes}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.expiresAt"></a>

- *Type:* str

Time the token will expire it, RFC3339 format. Will not expire per default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#expires_at DeployToken#expires_at}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.group"></a>

- *Type:* str

The name or id of the group to add the deploy token to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#group DeployToken#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#id DeployToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.project"></a>

- *Type:* str

The name or id of the project to add the deploy token to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#project DeployToken#project}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.deployToken.DeployToken.Initializer.parameter.username"></a>

- *Type:* str

A username for the deploy token. Default is `gitlab+deploy-token-{n}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#username DeployToken#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.deployToken.DeployToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.deployToken.DeployToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.deployToken.DeployToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.deployToken.DeployToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.deployToken.DeployToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.deployToken.DeployToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.deployToken.DeployToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.deployToken.DeployToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.deployToken.DeployToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.deployToken.DeployToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktf/provider-gitlab.deployToken.DeployToken.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-gitlab.deployToken.DeployToken.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.deployToken.DeployToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-gitlab.deployToken.DeployToken.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-gitlab.deployToken.DeployToken.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.deployToken.DeployToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import deploy_token

deployToken.DeployToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.deployToken.DeployToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.deployToken.DeployToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import deploy_token

deployToken.DeployToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.deployToken.DeployToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.deployToken.DeployToken.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import deploy_token

deployToken.DeployToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.deployToken.DeployToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.deployToken.DeployToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeployTokenConfig <a name="DeployTokenConfig" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import deploy_token

deployToken.DeployTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  scopes: typing.List[str],
  expires_at: str = None,
  group: str = None,
  id: str = None,
  project: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.name">name</a></code> | <code>str</code> | A name to describe the deploy token with. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Valid values: `read_repository`, `read_registry`, `read_package_registry`, `write_registry`, `write_package_registry`. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | Time the token will expire it, RFC3339 format. Will not expire per default. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.group">group</a></code> | <code>str</code> | The name or id of the group to add the deploy token to. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#id DeployToken#id}. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.project">project</a></code> | <code>str</code> | The name or id of the project to add the deploy token to. |
| <code><a href="#@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.username">username</a></code> | <code>str</code> | A username for the deploy token. Default is `gitlab+deploy-token-{n}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name to describe the deploy token with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#name DeployToken#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Valid values: `read_repository`, `read_registry`, `read_package_registry`, `write_registry`, `write_package_registry`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#scopes DeployToken#scopes}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

Time the token will expire it, RFC3339 format. Will not expire per default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#expires_at DeployToken#expires_at}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The name or id of the group to add the deploy token to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#group DeployToken#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#id DeployToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The name or id of the project to add the deploy token to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#project DeployToken#project}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.deployToken.DeployTokenConfig.property.username"></a>

```python
username: str
```

- *Type:* str

A username for the deploy token. Default is `gitlab+deploy-token-{n}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/deploy_token#username DeployToken#username}

---



