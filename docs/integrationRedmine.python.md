# `integrationRedmine` Submodule <a name="`integrationRedmine` Submodule" id="@cdktf/provider-gitlab.integrationRedmine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationRedmine <a name="IntegrationRedmine" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine gitlab_integration_redmine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_redmine

integrationRedmine.IntegrationRedmine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issues_url: str,
  new_issue_url: str,
  project: str,
  project_url: str,
  use_inherited_settings: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.issuesUrl">issues_url</a></code> | <code>str</code> | The URL to the Redmine project issue to link to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.newIssueUrl">new_issue_url</a></code> | <code>str</code> | The URL to use to create a new issue in the Redmine project linked to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.projectUrl">project_url</a></code> | <code>str</code> | The URL to the Redmine project to link to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.issuesUrl"></a>

- *Type:* str

The URL to the Redmine project issue to link to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#issues_url IntegrationRedmine#issues_url}

---

##### `new_issue_url`<sup>Required</sup> <a name="new_issue_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.newIssueUrl"></a>

- *Type:* str

The URL to use to create a new issue in the Redmine project linked to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#new_issue_url IntegrationRedmine#new_issue_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#project IntegrationRedmine#project}

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.projectUrl"></a>

- *Type:* str

The URL to the Redmine project to link to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#project_url IntegrationRedmine#project_url}

---

##### `use_inherited_settings`<sup>Optional</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.Initializer.parameter.useInheritedSettings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#use_inherited_settings IntegrationRedmine#use_inherited_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.resetUseInheritedSettings">reset_use_inherited_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_use_inherited_settings` <a name="reset_use_inherited_settings" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.resetUseInheritedSettings"></a>

```python
def reset_use_inherited_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationRedmine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_redmine

integrationRedmine.IntegrationRedmine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_redmine

integrationRedmine.IntegrationRedmine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_redmine

integrationRedmine.IntegrationRedmine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_redmine

integrationRedmine.IntegrationRedmine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationRedmine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationRedmine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationRedmine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationRedmine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.issuesUrlInput">issues_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.newIssueUrlInput">new_issue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.projectUrlInput">project_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.useInheritedSettingsInput">use_inherited_settings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.issuesUrl">issues_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.newIssueUrl">new_issue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.projectUrl">project_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issues_url_input`<sup>Optional</sup> <a name="issues_url_input" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.issuesUrlInput"></a>

```python
issues_url_input: str
```

- *Type:* str

---

##### `new_issue_url_input`<sup>Optional</sup> <a name="new_issue_url_input" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.newIssueUrlInput"></a>

```python
new_issue_url_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_url_input`<sup>Optional</sup> <a name="project_url_input" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.projectUrlInput"></a>

```python
project_url_input: str
```

- *Type:* str

---

##### `use_inherited_settings_input`<sup>Optional</sup> <a name="use_inherited_settings_input" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.useInheritedSettingsInput"></a>

```python
use_inherited_settings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.issuesUrl"></a>

```python
issues_url: str
```

- *Type:* str

---

##### `new_issue_url`<sup>Required</sup> <a name="new_issue_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.newIssueUrl"></a>

```python
new_issue_url: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.projectUrl"></a>

```python
project_url: str
```

- *Type:* str

---

##### `use_inherited_settings`<sup>Required</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.useInheritedSettings"></a>

```python
use_inherited_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationRedmineConfig <a name="IntegrationRedmineConfig" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_redmine

integrationRedmine.IntegrationRedmineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issues_url: str,
  new_issue_url: str,
  project: str,
  project_url: str,
  use_inherited_settings: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.issuesUrl">issues_url</a></code> | <code>str</code> | The URL to the Redmine project issue to link to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.newIssueUrl">new_issue_url</a></code> | <code>str</code> | The URL to use to create a new issue in the Redmine project linked to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.projectUrl">project_url</a></code> | <code>str</code> | The URL to the Redmine project to link to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.useInheritedSettings">use_inherited_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.issuesUrl"></a>

```python
issues_url: str
```

- *Type:* str

The URL to the Redmine project issue to link to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#issues_url IntegrationRedmine#issues_url}

---

##### `new_issue_url`<sup>Required</sup> <a name="new_issue_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.newIssueUrl"></a>

```python
new_issue_url: str
```

- *Type:* str

The URL to use to create a new issue in the Redmine project linked to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#new_issue_url IntegrationRedmine#new_issue_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#project IntegrationRedmine#project}

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.projectUrl"></a>

```python
project_url: str
```

- *Type:* str

The URL to the Redmine project to link to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#project_url IntegrationRedmine#project_url}

---

##### `use_inherited_settings`<sup>Optional</sup> <a name="use_inherited_settings" id="@cdktf/provider-gitlab.integrationRedmine.IntegrationRedmineConfig.property.useInheritedSettings"></a>

```python
use_inherited_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/integration_redmine#use_inherited_settings IntegrationRedmine#use_inherited_settings}

---



