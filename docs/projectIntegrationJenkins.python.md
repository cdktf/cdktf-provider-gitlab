# `projectIntegrationJenkins` Submodule <a name="`projectIntegrationJenkins` Submodule" id="@cdktf/provider-gitlab.projectIntegrationJenkins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationJenkins <a name="ProjectIntegrationJenkins" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins gitlab_project_integration_jenkins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jenkins

projectIntegrationJenkins.ProjectIntegrationJenkins(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  jenkins_url: str,
  project: str,
  project_name: str,
  enable_ssl_verification: bool | IResolvable = None,
  merge_request_events: bool | IResolvable = None,
  password: str = None,
  push_events: bool | IResolvable = None,
  tag_push_events: bool | IResolvable = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | Jenkins URL like `http://jenkins.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | The URL-friendly project name. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.enableSslVerification">enable_ssl_verification</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable SSL verification. Defaults to `true` (enabled). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.mergeRequestEvents">merge_request_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for authentication with the Jenkins server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.pushEvents">push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for authentication with the Jenkins server, if authentication is required by the server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `jenkins_url`<sup>Required</sup> <a name="jenkins_url" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.jenkinsUrl"></a>

- *Type:* str

Jenkins URL like `http://jenkins.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#jenkins_url ProjectIntegrationJenkins#jenkins_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#project ProjectIntegrationJenkins#project}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.projectName"></a>

- *Type:* str

The URL-friendly project name. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#project_name ProjectIntegrationJenkins#project_name}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.enableSslVerification"></a>

- *Type:* bool | cdktf.IResolvable

Enable SSL verification. Defaults to `true` (enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#enable_ssl_verification ProjectIntegrationJenkins#enable_ssl_verification}

---

##### `merge_request_events`<sup>Optional</sup> <a name="merge_request_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.mergeRequestEvents"></a>

- *Type:* bool | cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#merge_request_events ProjectIntegrationJenkins#merge_request_events}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.password"></a>

- *Type:* str

Password for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#password ProjectIntegrationJenkins#password}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.pushEvents"></a>

- *Type:* bool | cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#push_events ProjectIntegrationJenkins#push_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.tagPushEvents"></a>

- *Type:* bool | cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#tag_push_events ProjectIntegrationJenkins#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.username"></a>

- *Type:* str

Username for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#username ProjectIntegrationJenkins#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetEnableSslVerification">reset_enable_ssl_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetMergeRequestEvents">reset_merge_request_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enable_ssl_verification` <a name="reset_enable_ssl_verification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetEnableSslVerification"></a>

```python
def reset_enable_ssl_verification() -> None
```

##### `reset_merge_request_events` <a name="reset_merge_request_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetMergeRequestEvents"></a>

```python
def reset_merge_request_events() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectIntegrationJenkins resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jenkins

projectIntegrationJenkins.ProjectIntegrationJenkins.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jenkins

projectIntegrationJenkins.ProjectIntegrationJenkins.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jenkins

projectIntegrationJenkins.ProjectIntegrationJenkins.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jenkins

projectIntegrationJenkins.ProjectIntegrationJenkins.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectIntegrationJenkins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectIntegrationJenkins to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectIntegrationJenkins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationJenkins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerificationInput">enable_ssl_verification_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrlInput">jenkins_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEventsInput">merge_request_events_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEventsInput">push_events_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerification">enable_ssl_verification</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEvents">merge_request_events</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEvents">push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEvents">tag_push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `enable_ssl_verification_input`<sup>Optional</sup> <a name="enable_ssl_verification_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerificationInput"></a>

```python
enable_ssl_verification_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `jenkins_url_input`<sup>Optional</sup> <a name="jenkins_url_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrlInput"></a>

```python
jenkins_url_input: str
```

- *Type:* str

---

##### `merge_request_events_input`<sup>Optional</sup> <a name="merge_request_events_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEventsInput"></a>

```python
merge_request_events_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEventsInput"></a>

```python
push_events_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEventsInput"></a>

```python
tag_push_events_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `enable_ssl_verification`<sup>Required</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerification"></a>

```python
enable_ssl_verification: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `jenkins_url`<sup>Required</sup> <a name="jenkins_url" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrl"></a>

```python
jenkins_url: str
```

- *Type:* str

---

##### `merge_request_events`<sup>Required</sup> <a name="merge_request_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEvents"></a>

```python
merge_request_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEvents"></a>

```python
push_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEvents"></a>

```python
tag_push_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationJenkinsConfig <a name="ProjectIntegrationJenkinsConfig" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_integration_jenkins

projectIntegrationJenkins.ProjectIntegrationJenkinsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  jenkins_url: str,
  project: str,
  project_name: str,
  enable_ssl_verification: bool | IResolvable = None,
  merge_request_events: bool | IResolvable = None,
  password: str = None,
  push_events: bool | IResolvable = None,
  tag_push_events: bool | IResolvable = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | Jenkins URL like `http://jenkins.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.projectName">project_name</a></code> | <code>str</code> | The URL-friendly project name. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.enableSslVerification">enable_ssl_verification</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable SSL verification. Defaults to `true` (enabled). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.mergeRequestEvents">merge_request_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.password">password</a></code> | <code>str</code> | Password for authentication with the Jenkins server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.pushEvents">push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.tagPushEvents">tag_push_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.username">username</a></code> | <code>str</code> | Username for authentication with the Jenkins server, if authentication is required by the server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `jenkins_url`<sup>Required</sup> <a name="jenkins_url" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.jenkinsUrl"></a>

```python
jenkins_url: str
```

- *Type:* str

Jenkins URL like `http://jenkins.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#jenkins_url ProjectIntegrationJenkins#jenkins_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#project ProjectIntegrationJenkins#project}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

The URL-friendly project name. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#project_name ProjectIntegrationJenkins#project_name}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.enableSslVerification"></a>

```python
enable_ssl_verification: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable SSL verification. Defaults to `true` (enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#enable_ssl_verification ProjectIntegrationJenkins#enable_ssl_verification}

---

##### `merge_request_events`<sup>Optional</sup> <a name="merge_request_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.mergeRequestEvents"></a>

```python
merge_request_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#merge_request_events ProjectIntegrationJenkins#merge_request_events}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#password ProjectIntegrationJenkins#password}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.pushEvents"></a>

```python
push_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#push_events ProjectIntegrationJenkins#push_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.tagPushEvents"></a>

```python
tag_push_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#tag_push_events ProjectIntegrationJenkins#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#username ProjectIntegrationJenkins#username}

---



