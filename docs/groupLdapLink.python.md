# `groupLdapLink` Submodule <a name="`groupLdapLink` Submodule" id="@cdktf/provider-gitlab.groupLdapLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupLdapLink <a name="GroupLdapLink" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link gitlab_group_ldap_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_ldap_link

groupLdapLink.GroupLdapLink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  group_access: str,
  ldap_provider: str,
  cn: str = None,
  filter: str = None,
  force: typing.Union[bool, IResolvable] = None,
  id: str = None,
  member_role_id: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.group">group</a></code> | <code>str</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.groupAccess">group_access</a></code> | <code>str</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.ldapProvider">ldap_provider</a></code> | <code>str</code> | The name of the LDAP provider as stored in the GitLab database. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.cn">cn</a></code> | <code>str</code> | The CN of the LDAP group to link with. Required if `filter` is not provided. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then delete and replace an existing LDAP link if one exists. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#id GroupLdapLink#id}. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.memberRoleId">member_role_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a custom member role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.group"></a>

- *Type:* str

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#group GroupLdapLink#group}

---

##### `group_access`<sup>Required</sup> <a name="group_access" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.groupAccess"></a>

- *Type:* str

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `planner`, `reporter`, `developer`, `maintainer`, `owner`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#group_access GroupLdapLink#group_access}

---

##### `ldap_provider`<sup>Required</sup> <a name="ldap_provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.ldapProvider"></a>

- *Type:* str

The name of the LDAP provider as stored in the GitLab database.

Note that this is NOT the value of the `label` attribute as shown in the web UI. In most cases this will be `ldapmain` but you may use the [LDAP check rake task](https://docs.gitlab.com/administration/raketasks/ldap/#check) for receiving the LDAP server name: `LDAP: ... Server: ldapmain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#ldap_provider GroupLdapLink#ldap_provider}

---

##### `cn`<sup>Optional</sup> <a name="cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.cn"></a>

- *Type:* str

The CN of the LDAP group to link with. Required if `filter` is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#cn GroupLdapLink#cn}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.filter"></a>

- *Type:* str

The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#filter GroupLdapLink#filter}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.force"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then delete and replace an existing LDAP link if one exists.

Will also remove an LDAP link if the parent group is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#force GroupLdapLink#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#id GroupLdapLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `member_role_id`<sup>Optional</sup> <a name="member_role_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.memberRoleId"></a>

- *Type:* typing.Union[int, float]

The ID of a custom member role.

Only available for Ultimate instances. When using a custom role, the `group_access` must match the base role used to create the custom role. To remove a custom role and revert to a base role, set this value to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#member_role_id GroupLdapLink#member_role_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetCn">reset_cn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetMemberRoleId">reset_member_role_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cn` <a name="reset_cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetCn"></a>

```python
def reset_cn() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_force` <a name="reset_force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_member_role_id` <a name="reset_member_role_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetMemberRoleId"></a>

```python
def reset_member_role_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupLdapLink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group_ldap_link

groupLdapLink.GroupLdapLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group_ldap_link

groupLdapLink.GroupLdapLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group_ldap_link

groupLdapLink.GroupLdapLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import group_ldap_link

groupLdapLink.GroupLdapLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupLdapLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupLdapLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupLdapLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupLdapLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cnInput">cn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forceInput">force_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccessInput">group_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProviderInput">ldap_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.memberRoleIdInput">member_role_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cn">cn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccess">group_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProvider">ldap_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.memberRoleId">member_role_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cn_input`<sup>Optional</sup> <a name="cn_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cnInput"></a>

```python
cn_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forceInput"></a>

```python
force_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_access_input`<sup>Optional</sup> <a name="group_access_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccessInput"></a>

```python
group_access_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ldap_provider_input`<sup>Optional</sup> <a name="ldap_provider_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProviderInput"></a>

```python
ldap_provider_input: str
```

- *Type:* str

---

##### `member_role_id_input`<sup>Optional</sup> <a name="member_role_id_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.memberRoleIdInput"></a>

```python
member_role_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cn"></a>

```python
cn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `group_access`<sup>Required</sup> <a name="group_access" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccess"></a>

```python
group_access: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ldap_provider`<sup>Required</sup> <a name="ldap_provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProvider"></a>

```python
ldap_provider: str
```

- *Type:* str

---

##### `member_role_id`<sup>Required</sup> <a name="member_role_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.memberRoleId"></a>

```python
member_role_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupLdapLinkConfig <a name="GroupLdapLinkConfig" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_ldap_link

groupLdapLink.GroupLdapLinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  group_access: str,
  ldap_provider: str,
  cn: str = None,
  filter: str = None,
  force: typing.Union[bool, IResolvable] = None,
  id: str = None,
  member_role_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.group">group</a></code> | <code>str</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.groupAccess">group_access</a></code> | <code>str</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.ldapProvider">ldap_provider</a></code> | <code>str</code> | The name of the LDAP provider as stored in the GitLab database. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.cn">cn</a></code> | <code>str</code> | The CN of the LDAP group to link with. Required if `filter` is not provided. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.filter">filter</a></code> | <code>str</code> | The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then delete and replace an existing LDAP link if one exists. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#id GroupLdapLink#id}. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.memberRoleId">member_role_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a custom member role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#group GroupLdapLink#group}

---

##### `group_access`<sup>Required</sup> <a name="group_access" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.groupAccess"></a>

```python
group_access: str
```

- *Type:* str

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `planner`, `reporter`, `developer`, `maintainer`, `owner`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#group_access GroupLdapLink#group_access}

---

##### `ldap_provider`<sup>Required</sup> <a name="ldap_provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.ldapProvider"></a>

```python
ldap_provider: str
```

- *Type:* str

The name of the LDAP provider as stored in the GitLab database.

Note that this is NOT the value of the `label` attribute as shown in the web UI. In most cases this will be `ldapmain` but you may use the [LDAP check rake task](https://docs.gitlab.com/administration/raketasks/ldap/#check) for receiving the LDAP server name: `LDAP: ... Server: ldapmain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#ldap_provider GroupLdapLink#ldap_provider}

---

##### `cn`<sup>Optional</sup> <a name="cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.cn"></a>

```python
cn: str
```

- *Type:* str

The CN of the LDAP group to link with. Required if `filter` is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#cn GroupLdapLink#cn}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#filter GroupLdapLink#filter}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then delete and replace an existing LDAP link if one exists.

Will also remove an LDAP link if the parent group is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#force GroupLdapLink#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#id GroupLdapLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `member_role_id`<sup>Optional</sup> <a name="member_role_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.memberRoleId"></a>

```python
member_role_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a custom member role.

Only available for Ultimate instances. When using a custom role, the `group_access` must match the base role used to create the custom role. To remove a custom role and revert to a base role, set this value to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_ldap_link#member_role_id GroupLdapLink#member_role_id}

---



