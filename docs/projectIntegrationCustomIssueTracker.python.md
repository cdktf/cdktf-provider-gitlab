# `projectIntegrationCustomIssueTracker` Submodule <a name="`projectIntegrationCustomIssueTracker` Submodule" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationCustomIssueTracker <a name="ProjectIntegrationCustomIssueTracker" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_custom_issue_tracker gitlab_project_integration_custom_issue_tracker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_custom_issue_tracker

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  issues_url: str,
  project: str,
  project_url: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.issuesUrl">issues_url</a></code> | <code>str</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.projectUrl">project_url</a></code> | <code>str</code> | The URL to the project in the external issue tracker. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.issuesUrl"></a>

- *Type:* str

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_custom_issue_tracker#issues_url ProjectIntegrationCustomIssueTracker#issues_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.project"></a>

- *Type:* str

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_custom_issue_tracker#project ProjectIntegrationCustomIssueTracker#project}

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.projectUrl"></a>

- *Type:* str

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_custom_issue_tracker#project_url ProjectIntegrationCustomIssueTracker#project_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectIntegrationCustomIssueTracker resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_custom_issue_tracker

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_custom_issue_tracker

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_custom_issue_tracker

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_custom_issue_tracker

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectIntegrationCustomIssueTracker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectIntegrationCustomIssueTracker to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectIntegrationCustomIssueTracker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_custom_issue_tracker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationCustomIssueTracker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrlInput">issues_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrlInput">project_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrl">issues_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrl">project_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `issues_url_input`<sup>Optional</sup> <a name="issues_url_input" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrlInput"></a>

```python
issues_url_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_url_input`<sup>Optional</sup> <a name="project_url_input" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrlInput"></a>

```python
project_url_input: str
```

- *Type:* str

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrl"></a>

```python
issues_url: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrl"></a>

```python
project_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationCustomIssueTrackerConfig <a name="ProjectIntegrationCustomIssueTrackerConfig" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_custom_issue_tracker

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  issues_url: str,
  project: str,
  project_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.issuesUrl">issues_url</a></code> | <code>str</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.project">project</a></code> | <code>str</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.projectUrl">project_url</a></code> | <code>str</code> | The URL to the project in the external issue tracker. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.issuesUrl"></a>

```python
issues_url: str
```

- *Type:* str

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_custom_issue_tracker#issues_url ProjectIntegrationCustomIssueTracker#issues_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_custom_issue_tracker#project ProjectIntegrationCustomIssueTracker#project}

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.projectUrl"></a>

```python
project_url: str
```

- *Type:* str

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_custom_issue_tracker#project_url ProjectIntegrationCustomIssueTracker#project_url}

---



