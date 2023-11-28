# `repositoryFile` Submodule <a name="`repositoryFile` Submodule" id="@cdktf/provider-gitlab.repositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryFile <a name="RepositoryFile" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file gitlab_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import repository_file

repositoryFile.RepositoryFile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  branch: str,
  content: str,
  file_path: str,
  project: str,
  author_email: str = None,
  author_name: str = None,
  commit_message: str = None,
  create_commit_message: str = None,
  delete_commit_message: str = None,
  encoding: str = None,
  execute_filemode: typing.Union[bool, IResolvable] = None,
  id: str = None,
  overwrite_on_create: typing.Union[bool, IResolvable] = None,
  start_branch: str = None,
  timeouts: RepositoryFileTimeouts = None,
  update_commit_message: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.branch">branch</a></code> | <code>str</code> | Name of the branch to which to commit to. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.content">content</a></code> | <code>str</code> | File content. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.filePath">file_path</a></code> | <code>str</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.project">project</a></code> | <code>str</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.authorEmail">author_email</a></code> | <code>str</code> | Email of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.authorName">author_name</a></code> | <code>str</code> | Name of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.commitMessage">commit_message</a></code> | <code>str</code> | Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.createCommitMessage">create_commit_message</a></code> | <code>str</code> | Create commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.deleteCommitMessage">delete_commit_message</a></code> | <code>str</code> | Delete Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.encoding">encoding</a></code> | <code>str</code> | The file content encoding. Default value is `base64`. Valid values are: `base64`, `text`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.executeFilemode">execute_filemode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.overwriteOnCreate">overwrite_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable overwriting existing files, defaults to `false`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.startBranch">start_branch</a></code> | <code>str</code> | Name of the branch to start the new commit from. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.updateCommitMessage">update_commit_message</a></code> | <code>str</code> | Update commit message. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.branch"></a>

- *Type:* str

Name of the branch to which to commit to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.content"></a>

- *Type:* str

File content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#content RepositoryFile#content}

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.filePath"></a>

- *Type:* str

The full path of the file.

It must be relative to the root of the project without a leading slash `/` or `./`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#file_path RepositoryFile#file_path}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.project"></a>

- *Type:* str

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#project RepositoryFile#project}

---

##### `author_email`<sup>Optional</sup> <a name="author_email" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.authorEmail"></a>

- *Type:* str

Email of the commit author.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#author_email RepositoryFile#author_email}

---

##### `author_name`<sup>Optional</sup> <a name="author_name" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.authorName"></a>

- *Type:* str

Name of the commit author.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#author_name RepositoryFile#author_name}

---

##### `commit_message`<sup>Optional</sup> <a name="commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.commitMessage"></a>

- *Type:* str

Commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `create_commit_message`<sup>Optional</sup> <a name="create_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.createCommitMessage"></a>

- *Type:* str

Create commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#create_commit_message RepositoryFile#create_commit_message}

---

##### `delete_commit_message`<sup>Optional</sup> <a name="delete_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.deleteCommitMessage"></a>

- *Type:* str

Delete Commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#delete_commit_message RepositoryFile#delete_commit_message}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.encoding"></a>

- *Type:* str

The file content encoding. Default value is `base64`. Valid values are: `base64`, `text`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#encoding RepositoryFile#encoding}

---

##### `execute_filemode`<sup>Optional</sup> <a name="execute_filemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.executeFilemode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#execute_filemode RepositoryFile#execute_filemode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite_on_create`<sup>Optional</sup> <a name="overwrite_on_create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.overwriteOnCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable overwriting existing files, defaults to `false`.

This attribute is only used during `create` and must be use carefully. We suggest to use `imports` whenever possible and limit the use of this attribute for when the project was imported on the same `apply`. This attribute is not supported during a resource import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---

##### `start_branch`<sup>Optional</sup> <a name="start_branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.startBranch"></a>

- *Type:* str

Name of the branch to start the new commit from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#start_branch RepositoryFile#start_branch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#timeouts RepositoryFile#timeouts}

---

##### `update_commit_message`<sup>Optional</sup> <a name="update_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.updateCommitMessage"></a>

- *Type:* str

Update commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#update_commit_message RepositoryFile#update_commit_message}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorEmail">reset_author_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorName">reset_author_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetCommitMessage">reset_commit_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetCreateCommitMessage">reset_create_commit_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetDeleteCommitMessage">reset_delete_commit_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetExecuteFilemode">reset_execute_filemode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverwriteOnCreate">reset_overwrite_on_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetStartBranch">reset_start_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetUpdateCommitMessage">reset_update_commit_message</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#create RepositoryFile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#delete RepositoryFile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#update RepositoryFile#update}.

---

##### `reset_author_email` <a name="reset_author_email" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorEmail"></a>

```python
def reset_author_email() -> None
```

##### `reset_author_name` <a name="reset_author_name" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorName"></a>

```python
def reset_author_name() -> None
```

##### `reset_commit_message` <a name="reset_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetCommitMessage"></a>

```python
def reset_commit_message() -> None
```

##### `reset_create_commit_message` <a name="reset_create_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetCreateCommitMessage"></a>

```python
def reset_create_commit_message() -> None
```

##### `reset_delete_commit_message` <a name="reset_delete_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetDeleteCommitMessage"></a>

```python
def reset_delete_commit_message() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_execute_filemode` <a name="reset_execute_filemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetExecuteFilemode"></a>

```python
def reset_execute_filemode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_overwrite_on_create` <a name="reset_overwrite_on_create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverwriteOnCreate"></a>

```python
def reset_overwrite_on_create() -> None
```

##### `reset_start_branch` <a name="reset_start_branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetStartBranch"></a>

```python
def reset_start_branch() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_commit_message` <a name="reset_update_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetUpdateCommitMessage"></a>

```python
def reset_update_commit_message() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import repository_file

repositoryFile.RepositoryFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import repository_file

repositoryFile.RepositoryFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import repository_file

repositoryFile.RepositoryFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import repository_file

repositoryFile.RepositoryFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RepositoryFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RepositoryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.blobId">blob_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitId">commit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentSha256">content_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lastCommitId">last_commit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference">RepositoryFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmailInput">author_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorNameInput">author_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessageInput">commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.createCommitMessageInput">create_commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.deleteCommitMessageInput">delete_commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemodeInput">execute_filemode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreateInput">overwrite_on_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranchInput">start_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.updateCommitMessageInput">update_commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmail">author_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorName">author_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessage">commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.createCommitMessage">create_commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.deleteCommitMessage">delete_commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemode">execute_filemode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreate">overwrite_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranch">start_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.updateCommitMessage">update_commit_message</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blob_id`<sup>Required</sup> <a name="blob_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.blobId"></a>

```python
blob_id: str
```

- *Type:* str

---

##### `commit_id`<sup>Required</sup> <a name="commit_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

---

##### `content_sha256`<sup>Required</sup> <a name="content_sha256" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentSha256"></a>

```python
content_sha256: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `last_commit_id`<sup>Required</sup> <a name="last_commit_id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lastCommitId"></a>

```python
last_commit_id: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeouts"></a>

```python
timeouts: RepositoryFileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference">RepositoryFileTimeoutsOutputReference</a>

---

##### `author_email_input`<sup>Optional</sup> <a name="author_email_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmailInput"></a>

```python
author_email_input: str
```

- *Type:* str

---

##### `author_name_input`<sup>Optional</sup> <a name="author_name_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorNameInput"></a>

```python
author_name_input: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `commit_message_input`<sup>Optional</sup> <a name="commit_message_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessageInput"></a>

```python
commit_message_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `create_commit_message_input`<sup>Optional</sup> <a name="create_commit_message_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.createCommitMessageInput"></a>

```python
create_commit_message_input: str
```

- *Type:* str

---

##### `delete_commit_message_input`<sup>Optional</sup> <a name="delete_commit_message_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.deleteCommitMessageInput"></a>

```python
delete_commit_message_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `execute_filemode_input`<sup>Optional</sup> <a name="execute_filemode_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemodeInput"></a>

```python
execute_filemode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `overwrite_on_create_input`<sup>Optional</sup> <a name="overwrite_on_create_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreateInput"></a>

```python
overwrite_on_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `start_branch_input`<sup>Optional</sup> <a name="start_branch_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranchInput"></a>

```python
start_branch_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RepositoryFileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>]

---

##### `update_commit_message_input`<sup>Optional</sup> <a name="update_commit_message_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.updateCommitMessageInput"></a>

```python
update_commit_message_input: str
```

- *Type:* str

---

##### `author_email`<sup>Required</sup> <a name="author_email" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmail"></a>

```python
author_email: str
```

- *Type:* str

---

##### `author_name`<sup>Required</sup> <a name="author_name" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorName"></a>

```python
author_name: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `commit_message`<sup>Required</sup> <a name="commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `create_commit_message`<sup>Required</sup> <a name="create_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.createCommitMessage"></a>

```python
create_commit_message: str
```

- *Type:* str

---

##### `delete_commit_message`<sup>Required</sup> <a name="delete_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.deleteCommitMessage"></a>

```python
delete_commit_message: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `execute_filemode`<sup>Required</sup> <a name="execute_filemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemode"></a>

```python
execute_filemode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `overwrite_on_create`<sup>Required</sup> <a name="overwrite_on_create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreate"></a>

```python
overwrite_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `start_branch`<sup>Required</sup> <a name="start_branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranch"></a>

```python
start_branch: str
```

- *Type:* str

---

##### `update_commit_message`<sup>Required</sup> <a name="update_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.updateCommitMessage"></a>

```python
update_commit_message: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryFileConfig <a name="RepositoryFileConfig" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import repository_file

repositoryFile.RepositoryFileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  branch: str,
  content: str,
  file_path: str,
  project: str,
  author_email: str = None,
  author_name: str = None,
  commit_message: str = None,
  create_commit_message: str = None,
  delete_commit_message: str = None,
  encoding: str = None,
  execute_filemode: typing.Union[bool, IResolvable] = None,
  id: str = None,
  overwrite_on_create: typing.Union[bool, IResolvable] = None,
  start_branch: str = None,
  timeouts: RepositoryFileTimeouts = None,
  update_commit_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.branch">branch</a></code> | <code>str</code> | Name of the branch to which to commit to. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.content">content</a></code> | <code>str</code> | File content. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.filePath">file_path</a></code> | <code>str</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.project">project</a></code> | <code>str</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorEmail">author_email</a></code> | <code>str</code> | Email of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorName">author_name</a></code> | <code>str</code> | Name of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.commitMessage">commit_message</a></code> | <code>str</code> | Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.createCommitMessage">create_commit_message</a></code> | <code>str</code> | Create commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.deleteCommitMessage">delete_commit_message</a></code> | <code>str</code> | Delete Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.encoding">encoding</a></code> | <code>str</code> | The file content encoding. Default value is `base64`. Valid values are: `base64`, `text`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.executeFilemode">execute_filemode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate">overwrite_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable overwriting existing files, defaults to `false`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.startBranch">start_branch</a></code> | <code>str</code> | Name of the branch to start the new commit from. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.updateCommitMessage">update_commit_message</a></code> | <code>str</code> | Update commit message. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.branch"></a>

```python
branch: str
```

- *Type:* str

Name of the branch to which to commit to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.content"></a>

```python
content: str
```

- *Type:* str

File content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#content RepositoryFile#content}

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

The full path of the file.

It must be relative to the root of the project without a leading slash `/` or `./`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#file_path RepositoryFile#file_path}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#project RepositoryFile#project}

---

##### `author_email`<sup>Optional</sup> <a name="author_email" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorEmail"></a>

```python
author_email: str
```

- *Type:* str

Email of the commit author.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#author_email RepositoryFile#author_email}

---

##### `author_name`<sup>Optional</sup> <a name="author_name" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorName"></a>

```python
author_name: str
```

- *Type:* str

Name of the commit author.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#author_name RepositoryFile#author_name}

---

##### `commit_message`<sup>Optional</sup> <a name="commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

Commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `create_commit_message`<sup>Optional</sup> <a name="create_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.createCommitMessage"></a>

```python
create_commit_message: str
```

- *Type:* str

Create commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#create_commit_message RepositoryFile#create_commit_message}

---

##### `delete_commit_message`<sup>Optional</sup> <a name="delete_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.deleteCommitMessage"></a>

```python
delete_commit_message: str
```

- *Type:* str

Delete Commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#delete_commit_message RepositoryFile#delete_commit_message}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The file content encoding. Default value is `base64`. Valid values are: `base64`, `text`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#encoding RepositoryFile#encoding}

---

##### `execute_filemode`<sup>Optional</sup> <a name="execute_filemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.executeFilemode"></a>

```python
execute_filemode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#execute_filemode RepositoryFile#execute_filemode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite_on_create`<sup>Optional</sup> <a name="overwrite_on_create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate"></a>

```python
overwrite_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable overwriting existing files, defaults to `false`.

This attribute is only used during `create` and must be use carefully. We suggest to use `imports` whenever possible and limit the use of this attribute for when the project was imported on the same `apply`. This attribute is not supported during a resource import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---

##### `start_branch`<sup>Optional</sup> <a name="start_branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.startBranch"></a>

```python
start_branch: str
```

- *Type:* str

Name of the branch to start the new commit from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#start_branch RepositoryFile#start_branch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.timeouts"></a>

```python
timeouts: RepositoryFileTimeouts
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#timeouts RepositoryFile#timeouts}

---

##### `update_commit_message`<sup>Optional</sup> <a name="update_commit_message" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.updateCommitMessage"></a>

```python
update_commit_message: str
```

- *Type:* str

Update commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#update_commit_message RepositoryFile#update_commit_message}

---

### RepositoryFileTimeouts <a name="RepositoryFileTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import repository_file

repositoryFile.RepositoryFileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#create RepositoryFile#create}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#delete RepositoryFile#delete}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#update RepositoryFile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#create RepositoryFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#delete RepositoryFile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/repository_file#update RepositoryFile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryFileTimeoutsOutputReference <a name="RepositoryFileTimeoutsOutputReference" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import repository_file

repositoryFile.RepositoryFileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RepositoryFileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>]

---



