# `projectIssueBoard` Submodule <a name="`projectIssueBoard` Submodule" id="@cdktf/provider-gitlab.projectIssueBoard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssueBoard <a name="ProjectIssueBoard" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board gitlab_project_issue_board}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoard(
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
  project: str,
  assignee_id: typing.Union[int, float] = None,
  id: str = None,
  labels: typing.List[str] = None,
  lists: typing.Union[IResolvable, typing.List[ProjectIssueBoardLists]] = None,
  milestone_id: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the board. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or full path of the project maintained by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.assigneeId">assignee_id</a></code> | <code>typing.Union[int, float]</code> | The assignee the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.labels">labels</a></code> | <code>typing.List[str]</code> | The list of label names which the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.lists">lists</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]</code> | lists block. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | The milestone the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight range from 0 to 9, to which the board should be scoped to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.name"></a>

- *Type:* str

The name of the board.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#name ProjectIssueBoard#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.project"></a>

- *Type:* str

The ID or full path of the project maintained by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#project ProjectIssueBoard#project}

---

##### `assignee_id`<sup>Optional</sup> <a name="assignee_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.assigneeId"></a>

- *Type:* typing.Union[int, float]

The assignee the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.labels"></a>

- *Type:* typing.List[str]

The list of label names which the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#labels ProjectIssueBoard#labels}

---

##### `lists`<sup>Optional</sup> <a name="lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.lists"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]

lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#lists ProjectIssueBoard#lists}

---

##### `milestone_id`<sup>Optional</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.milestoneId"></a>

- *Type:* typing.Union[int, float]

The milestone the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

The weight range from 0 to 9, to which the board should be scoped to.

Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#weight ProjectIssueBoard#weight}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists">put_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId">reset_assignee_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists">reset_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId">reset_milestone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lists` <a name="put_lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists"></a>

```python
def put_lists(
  value: typing.Union[IResolvable, typing.List[ProjectIssueBoardLists]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]

---

##### `reset_assignee_id` <a name="reset_assignee_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId"></a>

```python
def reset_assignee_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_lists` <a name="reset_lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists"></a>

```python
def reset_lists() -> None
```

##### `reset_milestone_id` <a name="reset_milestone_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId"></a>

```python
def reset_milestone_id() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectIssueBoard resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectIssueBoard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectIssueBoard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectIssueBoard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIssueBoard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists">lists</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput">assignee_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput">lists_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput">milestone_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId">assignee_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lists`<sup>Required</sup> <a name="lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists"></a>

```python
lists: ProjectIssueBoardListsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a>

---

##### `assignee_id_input`<sup>Optional</sup> <a name="assignee_id_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput"></a>

```python
assignee_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lists_input`<sup>Optional</sup> <a name="lists_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput"></a>

```python
lists_input: typing.Union[IResolvable, typing.List[ProjectIssueBoardLists]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]

---

##### `milestone_id_input`<sup>Optional</sup> <a name="milestone_id_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput"></a>

```python
milestone_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `assignee_id`<sup>Required</sup> <a name="assignee_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId"></a>

```python
assignee_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `milestone_id`<sup>Required</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId"></a>

```python
milestone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueBoardConfig <a name="ProjectIssueBoardConfig" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoardConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project: str,
  assignee_id: typing.Union[int, float] = None,
  id: str = None,
  labels: typing.List[str] = None,
  lists: typing.Union[IResolvable, typing.List[ProjectIssueBoardLists]] = None,
  milestone_id: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name">name</a></code> | <code>str</code> | The name of the board. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project">project</a></code> | <code>str</code> | The ID or full path of the project maintained by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId">assignee_id</a></code> | <code>typing.Union[int, float]</code> | The assignee the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | The list of label names which the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists">lists</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]</code> | lists block. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | The milestone the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight range from 0 to 9, to which the board should be scoped to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the board.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#name ProjectIssueBoard#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or full path of the project maintained by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#project ProjectIssueBoard#project}

---

##### `assignee_id`<sup>Optional</sup> <a name="assignee_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId"></a>

```python
assignee_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The assignee the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

The list of label names which the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#labels ProjectIssueBoard#labels}

---

##### `lists`<sup>Optional</sup> <a name="lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists"></a>

```python
lists: typing.Union[IResolvable, typing.List[ProjectIssueBoardLists]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]

lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#lists ProjectIssueBoard#lists}

---

##### `milestone_id`<sup>Optional</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId"></a>

```python
milestone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The milestone the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The weight range from 0 to 9, to which the board should be scoped to.

Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#weight ProjectIssueBoard#weight}

---

### ProjectIssueBoardLists <a name="ProjectIssueBoardLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoardLists(
  assignee_id: typing.Union[int, float] = None,
  iteration_id: typing.Union[int, float] = None,
  label_id: typing.Union[int, float] = None,
  milestone_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId">assignee_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the assignee the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId">iteration_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the iteration the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId">label_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the label the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the milestone the list should be scoped to. Requires a GitLab EE license. |

---

##### `assignee_id`<sup>Optional</sup> <a name="assignee_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId"></a>

```python
assignee_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the assignee the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `iteration_id`<sup>Optional</sup> <a name="iteration_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId"></a>

```python
iteration_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the iteration the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#iteration_id ProjectIssueBoard#iteration_id}

---

##### `label_id`<sup>Optional</sup> <a name="label_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId"></a>

```python
label_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the label the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#label_id ProjectIssueBoard#label_id}

---

##### `milestone_id`<sup>Optional</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId"></a>

```python
milestone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the milestone the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueBoardListsList <a name="ProjectIssueBoardListsList" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoardListsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectIssueBoardListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectIssueBoardLists]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]]

---


### ProjectIssueBoardListsOutputReference <a name="ProjectIssueBoardListsOutputReference" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue_board

projectIssueBoard.ProjectIssueBoardListsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId">reset_assignee_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId">reset_iteration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId">reset_label_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId">reset_milestone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assignee_id` <a name="reset_assignee_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId"></a>

```python
def reset_assignee_id() -> None
```

##### `reset_iteration_id` <a name="reset_iteration_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId"></a>

```python
def reset_iteration_id() -> None
```

##### `reset_label_id` <a name="reset_label_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId"></a>

```python
def reset_label_id() -> None
```

##### `reset_milestone_id` <a name="reset_milestone_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId"></a>

```python
def reset_milestone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput">assignee_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput">iteration_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput">label_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput">milestone_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId">assignee_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId">iteration_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId">label_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `assignee_id_input`<sup>Optional</sup> <a name="assignee_id_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput"></a>

```python
assignee_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iteration_id_input`<sup>Optional</sup> <a name="iteration_id_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput"></a>

```python
iteration_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label_id_input`<sup>Optional</sup> <a name="label_id_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput"></a>

```python
label_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `milestone_id_input`<sup>Optional</sup> <a name="milestone_id_input" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput"></a>

```python
milestone_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `assignee_id`<sup>Required</sup> <a name="assignee_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId"></a>

```python
assignee_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iteration_id`<sup>Required</sup> <a name="iteration_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId"></a>

```python
iteration_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label_id`<sup>Required</sup> <a name="label_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId"></a>

```python
label_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `milestone_id`<sup>Required</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId"></a>

```python
milestone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectIssueBoardLists]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>]

---



