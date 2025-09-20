# `memberRole` Submodule <a name="`memberRole` Submodule" id="@cdktf/provider-gitlab.memberRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemberRole <a name="MemberRole" id="@cdktf/provider-gitlab.memberRole.MemberRole"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role gitlab_member_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import member_role

memberRole.MemberRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_access_level: str,
  enabled_permissions: typing.List[str],
  name: str,
  description: str = None,
  group_path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.baseAccessLevel">base_access_level</a></code> | <code>str</code> | The base access level for the custom role. Valid values are: `DEVELOPER`, `GUEST`, `MAINTAINER`, `MINIMAL_ACCESS`, `OWNER`, `REPORTER`. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.enabledPermissions">enabled_permissions</a></code> | <code>typing.List[str]</code> | All permissions enabled for the custom role. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Name for the member role. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for the member role. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.groupPath">group_path</a></code> | <code>str</code> | Full path of the namespace to create the member role in. **Required for SAAS** **Not allowed for self-managed**. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_access_level`<sup>Required</sup> <a name="base_access_level" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.baseAccessLevel"></a>

- *Type:* str

The base access level for the custom role. Valid values are: `DEVELOPER`, `GUEST`, `MAINTAINER`, `MINIMAL_ACCESS`, `OWNER`, `REPORTER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#base_access_level MemberRole#base_access_level}

---

##### `enabled_permissions`<sup>Required</sup> <a name="enabled_permissions" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.enabledPermissions"></a>

- *Type:* typing.List[str]

All permissions enabled for the custom role.

Valid values are: `ADMIN_CICD_VARIABLES`, `ADMIN_COMPLIANCE_FRAMEWORK`, `ADMIN_GROUP_MEMBER`, `ADMIN_INTEGRATIONS`, `ADMIN_MERGE_REQUEST`, `ADMIN_PROTECTED_BRANCH`, `ADMIN_PUSH_RULES`, `ADMIN_RUNNERS`, `ADMIN_TERRAFORM_STATE`, `ADMIN_VULNERABILITY`, `ADMIN_WEB_HOOK`, `ARCHIVE_PROJECT`, `MANAGE_DEPLOY_TOKENS`, `MANAGE_GROUP_ACCESS_TOKENS`, `MANAGE_MERGE_REQUEST_SETTINGS`, `MANAGE_PROJECT_ACCESS_TOKENS`, `MANAGE_SECURITY_POLICY_LINK`, `READ_ADMIN_CICD`, `READ_ADMIN_DASHBOARD`, `READ_CODE`, `READ_COMPLIANCE_DASHBOARD`, `READ_CRM_CONTACT`, `READ_DEPENDENCY`, `READ_RUNNERS`, `READ_VULNERABILITY`, `REMOVE_GROUP`, `REMOVE_PROJECT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#enabled_permissions MemberRole#enabled_permissions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.name"></a>

- *Type:* str

Name for the member role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#name MemberRole#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.description"></a>

- *Type:* str

Description for the member role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#description MemberRole#description}

---

##### `group_path`<sup>Optional</sup> <a name="group_path" id="@cdktf/provider-gitlab.memberRole.MemberRole.Initializer.parameter.groupPath"></a>

- *Type:* str

Full path of the namespace to create the member role in. **Required for SAAS** **Not allowed for self-managed**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#group_path MemberRole#group_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.resetGroupPath">reset_group_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.memberRole.MemberRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.memberRole.MemberRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.memberRole.MemberRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.memberRole.MemberRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.memberRole.MemberRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.memberRole.MemberRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.memberRole.MemberRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.memberRole.MemberRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.memberRole.MemberRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.memberRole.MemberRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.memberRole.MemberRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.memberRole.MemberRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.memberRole.MemberRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.memberRole.MemberRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.memberRole.MemberRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.memberRole.MemberRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.memberRole.MemberRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.memberRole.MemberRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.memberRole.MemberRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.memberRole.MemberRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.memberRole.MemberRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.memberRole.MemberRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.memberRole.MemberRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.memberRole.MemberRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.memberRole.MemberRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_group_path` <a name="reset_group_path" id="@cdktf/provider-gitlab.memberRole.MemberRole.resetGroupPath"></a>

```python
def reset_group_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MemberRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.memberRole.MemberRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import member_role

memberRole.MemberRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.memberRole.MemberRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.memberRole.MemberRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import member_role

memberRole.MemberRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.memberRole.MemberRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.memberRole.MemberRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import member_role

memberRole.MemberRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.memberRole.MemberRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.memberRole.MemberRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import member_role

memberRole.MemberRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MemberRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.memberRole.MemberRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.memberRole.MemberRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MemberRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.memberRole.MemberRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MemberRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.memberRole.MemberRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MemberRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.editPath">edit_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.iid">iid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.baseAccessLevelInput">base_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.enabledPermissionsInput">enabled_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.groupPathInput">group_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.baseAccessLevel">base_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.enabledPermissions">enabled_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.groupPath">group_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `edit_path`<sup>Required</sup> <a name="edit_path" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.editPath"></a>

```python
edit_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.iid"></a>

```python
iid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_access_level_input`<sup>Optional</sup> <a name="base_access_level_input" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.baseAccessLevelInput"></a>

```python
base_access_level_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_permissions_input`<sup>Optional</sup> <a name="enabled_permissions_input" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.enabledPermissionsInput"></a>

```python
enabled_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_path_input`<sup>Optional</sup> <a name="group_path_input" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.groupPathInput"></a>

```python
group_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `base_access_level`<sup>Required</sup> <a name="base_access_level" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.baseAccessLevel"></a>

```python
base_access_level: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled_permissions`<sup>Required</sup> <a name="enabled_permissions" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.enabledPermissions"></a>

```python
enabled_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_path`<sup>Required</sup> <a name="group_path" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.groupPath"></a>

```python
group_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.memberRole.MemberRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MemberRoleConfig <a name="MemberRoleConfig" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import member_role

memberRole.MemberRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_access_level: str,
  enabled_permissions: typing.List[str],
  name: str,
  description: str = None,
  group_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.baseAccessLevel">base_access_level</a></code> | <code>str</code> | The base access level for the custom role. Valid values are: `DEVELOPER`, `GUEST`, `MAINTAINER`, `MINIMAL_ACCESS`, `OWNER`, `REPORTER`. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.enabledPermissions">enabled_permissions</a></code> | <code>typing.List[str]</code> | All permissions enabled for the custom role. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.name">name</a></code> | <code>str</code> | Name for the member role. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.description">description</a></code> | <code>str</code> | Description for the member role. |
| <code><a href="#@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.groupPath">group_path</a></code> | <code>str</code> | Full path of the namespace to create the member role in. **Required for SAAS** **Not allowed for self-managed**. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_access_level`<sup>Required</sup> <a name="base_access_level" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.baseAccessLevel"></a>

```python
base_access_level: str
```

- *Type:* str

The base access level for the custom role. Valid values are: `DEVELOPER`, `GUEST`, `MAINTAINER`, `MINIMAL_ACCESS`, `OWNER`, `REPORTER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#base_access_level MemberRole#base_access_level}

---

##### `enabled_permissions`<sup>Required</sup> <a name="enabled_permissions" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.enabledPermissions"></a>

```python
enabled_permissions: typing.List[str]
```

- *Type:* typing.List[str]

All permissions enabled for the custom role.

Valid values are: `ADMIN_CICD_VARIABLES`, `ADMIN_COMPLIANCE_FRAMEWORK`, `ADMIN_GROUP_MEMBER`, `ADMIN_INTEGRATIONS`, `ADMIN_MERGE_REQUEST`, `ADMIN_PROTECTED_BRANCH`, `ADMIN_PUSH_RULES`, `ADMIN_RUNNERS`, `ADMIN_TERRAFORM_STATE`, `ADMIN_VULNERABILITY`, `ADMIN_WEB_HOOK`, `ARCHIVE_PROJECT`, `MANAGE_DEPLOY_TOKENS`, `MANAGE_GROUP_ACCESS_TOKENS`, `MANAGE_MERGE_REQUEST_SETTINGS`, `MANAGE_PROJECT_ACCESS_TOKENS`, `MANAGE_SECURITY_POLICY_LINK`, `READ_ADMIN_CICD`, `READ_ADMIN_DASHBOARD`, `READ_CODE`, `READ_COMPLIANCE_DASHBOARD`, `READ_CRM_CONTACT`, `READ_DEPENDENCY`, `READ_RUNNERS`, `READ_VULNERABILITY`, `REMOVE_GROUP`, `REMOVE_PROJECT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#enabled_permissions MemberRole#enabled_permissions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name for the member role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#name MemberRole#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the member role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#description MemberRole#description}

---

##### `group_path`<sup>Optional</sup> <a name="group_path" id="@cdktf/provider-gitlab.memberRole.MemberRoleConfig.property.groupPath"></a>

```python
group_path: str
```

- *Type:* str

Full path of the namespace to create the member role in. **Required for SAAS** **Not allowed for self-managed**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/member_role#group_path MemberRole#group_path}

---



