# `projectMergeRequestNote` Submodule <a name="`projectMergeRequestNote` Submodule" id="@cdktf/provider-gitlab.projectMergeRequestNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectMergeRequestNote <a name="ProjectMergeRequestNote" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note gitlab_project_merge_request_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_merge_request_note

projectMergeRequestNote.ProjectMergeRequestNote(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  body: str,
  merge_request_iid: typing.Union[int, float],
  project: str,
  created_at: str = None,
  internal: typing.Union[bool, IResolvable] = None,
  merge_request_diff_head_sha: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.body">body</a></code> | <code>str</code> | The body of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.mergeRequestIid">merge_request_iid</a></code> | <code>typing.Union[int, float]</code> | The IID of the merge request to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or path of the project to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | The creation date of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the merge request note is internal. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.mergeRequestDiffHeadSha">merge_request_diff_head_sha</a></code> | <code>str</code> | The diff head SHA of the merge request when the note was created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.body"></a>

- *Type:* str

The body of the merge request note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#body ProjectMergeRequestNote#body}

---

##### `merge_request_iid`<sup>Required</sup> <a name="merge_request_iid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.mergeRequestIid"></a>

- *Type:* typing.Union[int, float]

The IID of the merge request to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#merge_request_iid ProjectMergeRequestNote#merge_request_iid}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.project"></a>

- *Type:* str

The ID or path of the project to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#project ProjectMergeRequestNote#project}

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.createdAt"></a>

- *Type:* str

The creation date of the merge request note.

Using this field requires the token used with the provider to either be an Admin, or hava a Project or Group Owner role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#created_at ProjectMergeRequestNote#created_at}

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.internal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the merge request note is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#internal ProjectMergeRequestNote#internal}

---

##### `merge_request_diff_head_sha`<sup>Optional</sup> <a name="merge_request_diff_head_sha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.mergeRequestDiffHeadSha"></a>

- *Type:* str

The diff head SHA of the merge request when the note was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#merge_request_diff_head_sha ProjectMergeRequestNote#merge_request_diff_head_sha}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal">reset_internal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha">reset_merge_request_diff_head_sha</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_internal` <a name="reset_internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal"></a>

```python
def reset_internal() -> None
```

##### `reset_merge_request_diff_head_sha` <a name="reset_merge_request_diff_head_sha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha"></a>

```python
def reset_merge_request_diff_head_sha() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_merge_request_note

projectMergeRequestNote.ProjectMergeRequestNote.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_merge_request_note

projectMergeRequestNote.ProjectMergeRequestNote.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_merge_request_note

projectMergeRequestNote.ProjectMergeRequestNote.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_merge_request_note

projectMergeRequestNote.ProjectMergeRequestNote.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectMergeRequestNote to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectMergeRequestNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectMergeRequestNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId">note_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable">resolvable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute">system_attribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput">internal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput">merge_request_diff_head_sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput">merge_request_iid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha">merge_request_diff_head_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid">merge_request_iid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `note_id`<sup>Required</sup> <a name="note_id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId"></a>

```python
note_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resolvable`<sup>Required</sup> <a name="resolvable" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable"></a>

```python
resolvable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute"></a>

```python
system_attribute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `internal_input`<sup>Optional</sup> <a name="internal_input" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput"></a>

```python
internal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_request_diff_head_sha_input`<sup>Optional</sup> <a name="merge_request_diff_head_sha_input" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput"></a>

```python
merge_request_diff_head_sha_input: str
```

- *Type:* str

---

##### `merge_request_iid_input`<sup>Optional</sup> <a name="merge_request_iid_input" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput"></a>

```python
merge_request_iid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_request_diff_head_sha`<sup>Required</sup> <a name="merge_request_diff_head_sha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha"></a>

```python
merge_request_diff_head_sha: str
```

- *Type:* str

---

##### `merge_request_iid`<sup>Required</sup> <a name="merge_request_iid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid"></a>

```python
merge_request_iid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectMergeRequestNoteConfig <a name="ProjectMergeRequestNoteConfig" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_merge_request_note

projectMergeRequestNote.ProjectMergeRequestNoteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  body: str,
  merge_request_iid: typing.Union[int, float],
  project: str,
  created_at: str = None,
  internal: typing.Union[bool, IResolvable] = None,
  merge_request_diff_head_sha: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body">body</a></code> | <code>str</code> | The body of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid">merge_request_iid</a></code> | <code>typing.Union[int, float]</code> | The IID of the merge request to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project">project</a></code> | <code>str</code> | The ID or path of the project to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt">created_at</a></code> | <code>str</code> | The creation date of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the merge request note is internal. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha">merge_request_diff_head_sha</a></code> | <code>str</code> | The diff head SHA of the merge request when the note was created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body"></a>

```python
body: str
```

- *Type:* str

The body of the merge request note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#body ProjectMergeRequestNote#body}

---

##### `merge_request_iid`<sup>Required</sup> <a name="merge_request_iid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid"></a>

```python
merge_request_iid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IID of the merge request to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#merge_request_iid ProjectMergeRequestNote#merge_request_iid}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or path of the project to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#project ProjectMergeRequestNote#project}

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

The creation date of the merge request note.

Using this field requires the token used with the provider to either be an Admin, or hava a Project or Group Owner role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#created_at ProjectMergeRequestNote#created_at}

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the merge request note is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#internal ProjectMergeRequestNote#internal}

---

##### `merge_request_diff_head_sha`<sup>Optional</sup> <a name="merge_request_diff_head_sha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha"></a>

```python
merge_request_diff_head_sha: str
```

- *Type:* str

The diff head SHA of the merge request when the note was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_merge_request_note#merge_request_diff_head_sha ProjectMergeRequestNote#merge_request_diff_head_sha}

---



