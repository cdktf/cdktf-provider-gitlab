# `gitlab_group_ldap_link`

Refer to the Terraform Registory for docs: [`gitlab_group_ldap_link`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link).

# `groupLdapLink` Submodule <a name="`groupLdapLink` Submodule" id="@cdktf/provider-gitlab.groupLdapLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupLdapLink <a name="GroupLdapLink" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link gitlab_group_ldap_link}.

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
  ldap_provider: str,
  access_level: str = None,
  cn: str = None,
  filter: str = None,
  force: typing.Union[bool, IResolvable] = None,
  group_access: str = None,
  id: str = None
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
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.ldapProvider">ldap_provider</a></code> | <code>str</code> | The name of the LDAP provider as stored in the GitLab database. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.cn">cn</a></code> | <code>str</code> | The CN of the LDAP group to link with. Required if `filter` is not provided. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then delete and replace an existing LDAP link if one exists. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.groupAccess">group_access</a></code> | <code>str</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#id GroupLdapLink#id}. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#group GroupLdapLink#group}

---

##### `ldap_provider`<sup>Required</sup> <a name="ldap_provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.ldapProvider"></a>

- *Type:* str

The name of the LDAP provider as stored in the GitLab database.

Note that this is NOT the value of the `label` attribute as shown in the web UI. In most cases this will be `ldapmain` but you may use the [LDAP check rake task](https://docs.gitlab.com/ee/administration/raketasks/ldap.html#check) for receiving the LDAP server name: `LDAP: ... Server: ldapmain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#ldap_provider GroupLdapLink#ldap_provider}

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.accessLevel"></a>

- *Type:* str

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#access_level GroupLdapLink#access_level}

---

##### `cn`<sup>Optional</sup> <a name="cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.cn"></a>

- *Type:* str

The CN of the LDAP group to link with. Required if `filter` is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#cn GroupLdapLink#cn}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.filter"></a>

- *Type:* str

The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#filter GroupLdapLink#filter}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.force"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then delete and replace an existing LDAP link if one exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#force GroupLdapLink#force}

---

##### `group_access`<sup>Optional</sup> <a name="group_access" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.groupAccess"></a>

- *Type:* str

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#group_access GroupLdapLink#group_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#id GroupLdapLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetCn">reset_cn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetGroupAccess">reset_group_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetId">reset_id</a></code> | *No description.* |

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

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

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

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

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

##### `reset_group_access` <a name="reset_group_access" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetGroupAccess"></a>

```python
def reset_group_access() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

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
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cnInput">cn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forceInput">force_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccessInput">group_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProviderInput">ldap_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cn">cn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccess">group_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProvider">ldap_provider</a></code> | <code>str</code> | *No description.* |

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

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

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

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

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
  ldap_provider: str,
  access_level: str = None,
  cn: str = None,
  filter: str = None,
  force: typing.Union[bool, IResolvable] = None,
  group_access: str = None,
  id: str = None
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
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.ldapProvider">ldap_provider</a></code> | <code>str</code> | The name of the LDAP provider as stored in the GitLab database. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.cn">cn</a></code> | <code>str</code> | The CN of the LDAP group to link with. Required if `filter` is not provided. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.filter">filter</a></code> | <code>str</code> | The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then delete and replace an existing LDAP link if one exists. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.groupAccess">group_access</a></code> | <code>str</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#id GroupLdapLink#id}. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#group GroupLdapLink#group}

---

##### `ldap_provider`<sup>Required</sup> <a name="ldap_provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.ldapProvider"></a>

```python
ldap_provider: str
```

- *Type:* str

The name of the LDAP provider as stored in the GitLab database.

Note that this is NOT the value of the `label` attribute as shown in the web UI. In most cases this will be `ldapmain` but you may use the [LDAP check rake task](https://docs.gitlab.com/ee/administration/raketasks/ldap.html#check) for receiving the LDAP server name: `LDAP: ... Server: ldapmain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#ldap_provider GroupLdapLink#ldap_provider}

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#access_level GroupLdapLink#access_level}

---

##### `cn`<sup>Optional</sup> <a name="cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.cn"></a>

```python
cn: str
```

- *Type:* str

The CN of the LDAP group to link with. Required if `filter` is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#cn GroupLdapLink#cn}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#filter GroupLdapLink#filter}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then delete and replace an existing LDAP link if one exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#force GroupLdapLink#force}

---

##### `group_access`<sup>Optional</sup> <a name="group_access" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.groupAccess"></a>

```python
group_access: str
```

- *Type:* str

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#group_access GroupLdapLink#group_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/group_ldap_link#id GroupLdapLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



