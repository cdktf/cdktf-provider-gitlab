# `dataGitlabGroupProvisionedUsers` Submodule <a name="`dataGitlabGroupProvisionedUsers` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupProvisionedUsers <a name="DataGitlabGroupProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users gitlab_group_provisioned_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsers;

DataGitlabGroupProvisionedUsers.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .id(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .blocked(java.lang.Boolean)
//  .blocked(IResolvable)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .provisionedUsers(IResolvable)
//  .provisionedUsers(java.util.List<DataGitlabGroupProvisionedUsersProvisionedUsers>)
//  .search(java.lang.String)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return only active provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return only blocked provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.provisionedUsers">provisionedUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>></code> | provisioned_users block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | The search query to filter the provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username of the provisioned user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#id DataGitlabGroupProvisionedUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return only active provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#active DataGitlabGroupProvisionedUsers#active}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.blocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return only blocked provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#blocked DataGitlabGroupProvisionedUsers#blocked}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.createdAfter"></a>

- *Type:* java.lang.String

Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#created_after DataGitlabGroupProvisionedUsers#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.createdBefore"></a>

- *Type:* java.lang.String

Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#created_before DataGitlabGroupProvisionedUsers#created_before}

---

##### `provisionedUsers`<sup>Optional</sup> <a name="provisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.provisionedUsers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>>

provisioned_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#provisioned_users DataGitlabGroupProvisionedUsers#provisioned_users}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.search"></a>

- *Type:* java.lang.String

The search query to filter the provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#search DataGitlabGroupProvisionedUsers#search}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username of the provisioned user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#username DataGitlabGroupProvisionedUsers#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers">putProvisionedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetBlocked">resetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetProvisionedUsers">resetProvisionedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProvisionedUsers` <a name="putProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers"></a>

```java
public void putProvisionedUsers(IResolvable OR java.util.List<DataGitlabGroupProvisionedUsersProvisionedUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetActive"></a>

```java
public void resetActive()
```

##### `resetBlocked` <a name="resetBlocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetBlocked"></a>

```java
public void resetBlocked()
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedAfter"></a>

```java
public void resetCreatedAfter()
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedBefore"></a>

```java
public void resetCreatedBefore()
```

##### `resetProvisionedUsers` <a name="resetProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetProvisionedUsers"></a>

```java
public void resetProvisionedUsers()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabGroupProvisionedUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsers;

DataGitlabGroupProvisionedUsers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsers;

DataGitlabGroupProvisionedUsers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsers;

DataGitlabGroupProvisionedUsers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsers;

DataGitlabGroupProvisionedUsers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabGroupProvisionedUsers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabGroupProvisionedUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabGroupProvisionedUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabGroupProvisionedUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupProvisionedUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsers">provisionedUsers</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList">DataGitlabGroupProvisionedUsersProvisionedUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blockedInput">blockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfterInput">createdAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBeforeInput">createdBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsersInput">provisionedUsersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisionedUsers`<sup>Required</sup> <a name="provisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsers"></a>

```java
public DataGitlabGroupProvisionedUsersProvisionedUsersList getProvisionedUsers();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList">DataGitlabGroupProvisionedUsersProvisionedUsersList</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockedInput`<sup>Optional</sup> <a name="blockedInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blockedInput"></a>

```java
public java.lang.Object getBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfterInput"></a>

```java
public java.lang.String getCreatedAfterInput();
```

- *Type:* java.lang.String

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBeforeInput"></a>

```java
public java.lang.String getCreatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `provisionedUsersInput`<sup>Optional</sup> <a name="provisionedUsersInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsersInput"></a>

```java
public java.lang.Object getProvisionedUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>>

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blocked`<sup>Required</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blocked"></a>

```java
public java.lang.Object getBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupProvisionedUsersConfig <a name="DataGitlabGroupProvisionedUsersConfig" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsersConfig;

DataGitlabGroupProvisionedUsersConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .id(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .blocked(java.lang.Boolean)
//  .blocked(IResolvable)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .provisionedUsers(IResolvable)
//  .provisionedUsers(java.util.List<DataGitlabGroupProvisionedUsersProvisionedUsers>)
//  .search(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return only active provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return only blocked provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisionedUsers">provisionedUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>></code> | provisioned_users block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.search">search</a></code> | <code>java.lang.String</code> | The search query to filter the provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username of the provisioned user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#id DataGitlabGroupProvisionedUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return only active provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#active DataGitlabGroupProvisionedUsers#active}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.blocked"></a>

```java
public java.lang.Object getBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return only blocked provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#blocked DataGitlabGroupProvisionedUsers#blocked}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#created_after DataGitlabGroupProvisionedUsers#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#created_before DataGitlabGroupProvisionedUsers#created_before}

---

##### `provisionedUsers`<sup>Optional</sup> <a name="provisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisionedUsers"></a>

```java
public java.lang.Object getProvisionedUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>>

provisioned_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#provisioned_users DataGitlabGroupProvisionedUsers#provisioned_users}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

The search query to filter the provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#search DataGitlabGroupProvisionedUsers#search}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the provisioned user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/data-sources/group_provisioned_users#username DataGitlabGroupProvisionedUsers#username}

---

### DataGitlabGroupProvisionedUsersProvisionedUsers <a name="DataGitlabGroupProvisionedUsersProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsersProvisionedUsers;

DataGitlabGroupProvisionedUsersProvisionedUsers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupProvisionedUsersProvisionedUsersList <a name="DataGitlabGroupProvisionedUsersProvisionedUsersList" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsersProvisionedUsersList;

new DataGitlabGroupProvisionedUsersProvisionedUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get"></a>

```java
public DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>>

---


### DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference <a name="DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_provisioned_users.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference;

new DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bio">bio</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bot">bot</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.confirmedAt">confirmedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.external">external</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastActivityOn">lastActivityOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastSignInAt">lastSignInAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.linkedin">linkedin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.privateProfile">privateProfile</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.pronouns">pronouns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.publicEmail">publicEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.skype">skype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twitter">twitter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twoFactorEnabled">twoFactorEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.websiteUrl">websiteUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `bio`<sup>Required</sup> <a name="bio" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bio"></a>

```java
public java.lang.String getBio();
```

- *Type:* java.lang.String

---

##### `bot`<sup>Required</sup> <a name="bot" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bot"></a>

```java
public IResolvable getBot();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `confirmedAt`<sup>Required</sup> <a name="confirmedAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.confirmedAt"></a>

```java
public java.lang.String getConfirmedAt();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.external"></a>

```java
public IResolvable getExternal();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastActivityOn`<sup>Required</sup> <a name="lastActivityOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastActivityOn"></a>

```java
public java.lang.String getLastActivityOn();
```

- *Type:* java.lang.String

---

##### `lastSignInAt`<sup>Required</sup> <a name="lastSignInAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastSignInAt"></a>

```java
public java.lang.String getLastSignInAt();
```

- *Type:* java.lang.String

---

##### `linkedin`<sup>Required</sup> <a name="linkedin" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.linkedin"></a>

```java
public java.lang.String getLinkedin();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `privateProfile`<sup>Required</sup> <a name="privateProfile" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.privateProfile"></a>

```java
public IResolvable getPrivateProfile();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `pronouns`<sup>Required</sup> <a name="pronouns" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.pronouns"></a>

```java
public java.lang.String getPronouns();
```

- *Type:* java.lang.String

---

##### `publicEmail`<sup>Required</sup> <a name="publicEmail" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.publicEmail"></a>

```java
public java.lang.String getPublicEmail();
```

- *Type:* java.lang.String

---

##### `skype`<sup>Required</sup> <a name="skype" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.skype"></a>

```java
public java.lang.String getSkype();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twitter"></a>

```java
public java.lang.String getTwitter();
```

- *Type:* java.lang.String

---

##### `twoFactorEnabled`<sup>Required</sup> <a name="twoFactorEnabled" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twoFactorEnabled"></a>

```java
public IResolvable getTwoFactorEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `websiteUrl`<sup>Required</sup> <a name="websiteUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.websiteUrl"></a>

```java
public java.lang.String getWebsiteUrl();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>

---



