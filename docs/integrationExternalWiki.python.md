# `gitlab_integration_external_wiki`

Refer to the Terraform Registory for docs: [`gitlab_integration_external_wiki`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki).

# `integrationExternalWiki` Submodule <a name="`integrationExternalWiki` Submodule" id="@cdktf/provider-gitlab.integrationExternalWiki"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationExternalWiki <a name="IntegrationExternalWiki" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki gitlab_integration_external_wiki}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_external_wiki

integrationExternalWiki.IntegrationExternalWiki(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_wiki_url: str,
  project: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.externalWikiUrl">external_wiki_url</a></code> | <code>str</code> | The URL of the external wiki. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki#id IntegrationExternalWiki#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_wiki_url`<sup>Required</sup> <a name="external_wiki_url" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.externalWikiUrl"></a>

- *Type:* str

The URL of the external wiki.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki#external_wiki_url IntegrationExternalWiki#external_wiki_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki#project IntegrationExternalWiki#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki#id IntegrationExternalWiki#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_external_wiki

integrationExternalWiki.IntegrationExternalWiki.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_external_wiki

integrationExternalWiki.IntegrationExternalWiki.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_external_wiki

integrationExternalWiki.IntegrationExternalWiki.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.externalWikiUrlInput">external_wiki_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.externalWikiUrl">external_wiki_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `external_wiki_url_input`<sup>Optional</sup> <a name="external_wiki_url_input" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.externalWikiUrlInput"></a>

```python
external_wiki_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `external_wiki_url`<sup>Required</sup> <a name="external_wiki_url" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.externalWikiUrl"></a>

```python
external_wiki_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWiki.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationExternalWikiConfig <a name="IntegrationExternalWikiConfig" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_external_wiki

integrationExternalWiki.IntegrationExternalWikiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_wiki_url: str,
  project: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.externalWikiUrl">external_wiki_url</a></code> | <code>str</code> | The URL of the external wiki. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki#id IntegrationExternalWiki#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_wiki_url`<sup>Required</sup> <a name="external_wiki_url" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.externalWikiUrl"></a>

```python
external_wiki_url: str
```

- *Type:* str

The URL of the external wiki.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki#external_wiki_url IntegrationExternalWiki#external_wiki_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki#project IntegrationExternalWiki#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationExternalWiki.IntegrationExternalWikiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.0/docs/resources/integration_external_wiki#id IntegrationExternalWiki#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


