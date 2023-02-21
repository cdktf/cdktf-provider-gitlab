# `dataGitlabUsers` Submodule <a name="`dataGitlabUsers` Submodule" id="@cdktf/provider-gitlab.dataGitlabUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabUsers <a name="DataGitlabUsers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/users gitlab_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_users.DataGitlabUsers;

DataGitlabUsers.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .blocked(java.lang.Boolean)
//  .blocked(IResolvable)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .externProvider(java.lang.String)
//  .externUid(java.lang.String)
//  .id(java.lang.String)
//  .orderBy(java.lang.String)
//  .search(java.lang.String)
//  .sort(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filter users that are active. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filter users that are blocked. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Search for users created after a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Search for users created before a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.externProvider">externProvider</a></code> | <code>java.lang.String</code> | Lookup users by external provider. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.externUid">externUid</a></code> | <code>java.lang.String</code> | Lookup users by external UID. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#id DataGitlabUsers#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search users by username, name or email. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.sort">sort</a></code> | <code>java.lang.String</code> | Sort users' list in asc or desc order. (Requires administrator privileges). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filter users that are active.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#active DataGitlabUsers#active}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.blocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filter users that are blocked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#blocked DataGitlabUsers#blocked}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.createdAfter"></a>

- *Type:* java.lang.String

Search for users created after a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#created_after DataGitlabUsers#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.createdBefore"></a>

- *Type:* java.lang.String

Search for users created before a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#created_before DataGitlabUsers#created_before}

---

##### `externProvider`<sup>Optional</sup> <a name="externProvider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.externProvider"></a>

- *Type:* java.lang.String

Lookup users by external provider. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#extern_provider DataGitlabUsers#extern_provider}

---

##### `externUid`<sup>Optional</sup> <a name="externUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.externUid"></a>

- *Type:* java.lang.String

Lookup users by external UID. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#extern_uid DataGitlabUsers#extern_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#id DataGitlabUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.orderBy"></a>

- *Type:* java.lang.String

Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#order_by DataGitlabUsers#order_by}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search users by username, name or email.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#search DataGitlabUsers#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.sort"></a>

- *Type:* java.lang.String

Sort users' list in asc or desc order. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#sort DataGitlabUsers#sort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetBlocked">resetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternProvider">resetExternProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternUid">resetExternUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSort">resetSort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetActive"></a>

```java
public void resetActive()
```

##### `resetBlocked` <a name="resetBlocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetBlocked"></a>

```java
public void resetBlocked()
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedAfter"></a>

```java
public void resetCreatedAfter()
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedBefore"></a>

```java
public void resetCreatedBefore()
```

##### `resetExternProvider` <a name="resetExternProvider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternProvider"></a>

```java
public void resetExternProvider()
```

##### `resetExternUid` <a name="resetExternUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternUid"></a>

```java
public void resetExternUid()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetId"></a>

```java
public void resetId()
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOrderBy"></a>

```java
public void resetOrderBy()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSort"></a>

```java
public void resetSort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_users.DataGitlabUsers;

DataGitlabUsers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_users.DataGitlabUsers;

DataGitlabUsers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_users.DataGitlabUsers;

DataGitlabUsers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.users">users</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList">DataGitlabUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blockedInput">blockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfterInput">createdAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBeforeInput">createdBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProviderInput">externProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUidInput">externUidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sortInput">sortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProvider">externProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUid">externUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sort">sort</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.users"></a>

```java
public DataGitlabUsersUsersList getUsers();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList">DataGitlabUsersUsersList</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockedInput`<sup>Optional</sup> <a name="blockedInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blockedInput"></a>

```java
public java.lang.Object getBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfterInput"></a>

```java
public java.lang.String getCreatedAfterInput();
```

- *Type:* java.lang.String

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBeforeInput"></a>

```java
public java.lang.String getCreatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `externProviderInput`<sup>Optional</sup> <a name="externProviderInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProviderInput"></a>

```java
public java.lang.String getExternProviderInput();
```

- *Type:* java.lang.String

---

##### `externUidInput`<sup>Optional</sup> <a name="externUidInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUidInput"></a>

```java
public java.lang.String getExternUidInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sortInput"></a>

```java
public java.lang.String getSortInput();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blocked`<sup>Required</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blocked"></a>

```java
public java.lang.Object getBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

---

##### `externProvider`<sup>Required</sup> <a name="externProvider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProvider"></a>

```java
public java.lang.String getExternProvider();
```

- *Type:* java.lang.String

---

##### `externUid`<sup>Required</sup> <a name="externUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUid"></a>

```java
public java.lang.String getExternUid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sort"></a>

```java
public java.lang.String getSort();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabUsersConfig <a name="DataGitlabUsersConfig" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_users.DataGitlabUsersConfig;

DataGitlabUsersConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .blocked(java.lang.Boolean)
//  .blocked(IResolvable)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .externProvider(java.lang.String)
//  .externUid(java.lang.String)
//  .id(java.lang.String)
//  .orderBy(java.lang.String)
//  .search(java.lang.String)
//  .sort(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filter users that are active. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filter users that are blocked. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Search for users created after a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Search for users created before a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externProvider">externProvider</a></code> | <code>java.lang.String</code> | Lookup users by external provider. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externUid">externUid</a></code> | <code>java.lang.String</code> | Lookup users by external UID. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#id DataGitlabUsers#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search users by username, name or email. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.sort">sort</a></code> | <code>java.lang.String</code> | Sort users' list in asc or desc order. (Requires administrator privileges). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filter users that are active.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#active DataGitlabUsers#active}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.blocked"></a>

```java
public java.lang.Object getBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filter users that are blocked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#blocked DataGitlabUsers#blocked}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

Search for users created after a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#created_after DataGitlabUsers#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

Search for users created before a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#created_before DataGitlabUsers#created_before}

---

##### `externProvider`<sup>Optional</sup> <a name="externProvider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externProvider"></a>

```java
public java.lang.String getExternProvider();
```

- *Type:* java.lang.String

Lookup users by external provider. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#extern_provider DataGitlabUsers#extern_provider}

---

##### `externUid`<sup>Optional</sup> <a name="externUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externUid"></a>

```java
public java.lang.String getExternUid();
```

- *Type:* java.lang.String

Lookup users by external UID. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#extern_uid DataGitlabUsers#extern_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#id DataGitlabUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#order_by DataGitlabUsers#order_by}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search users by username, name or email.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#search DataGitlabUsers#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.sort"></a>

```java
public java.lang.String getSort();
```

- *Type:* java.lang.String

Sort users' list in asc or desc order. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/users#sort DataGitlabUsers#sort}

---

### DataGitlabUsersUsers <a name="DataGitlabUsersUsers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_users.DataGitlabUsersUsers;

DataGitlabUsersUsers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabUsersUsersList <a name="DataGitlabUsersUsersList" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_users.DataGitlabUsersUsersList;

new DataGitlabUsersUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get"></a>

```java
public DataGitlabUsersUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabUsersUsersOutputReference <a name="DataGitlabUsersUsersOutputReference" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_users.DataGitlabUsersUsersOutputReference;

new DataGitlabUsersUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.bio">bio</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateGroup">canCreateGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateProject">canCreateProject</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.colorSchemeId">colorSchemeId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.currentSignInAt">currentSignInAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.external">external</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.externUid">externUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isAdmin">isAdmin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.lastSignInAt">lastSignInAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.linkedin">linkedin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.namespaceId">namespaceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.projectsLimit">projectsLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.skype">skype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.themeId">themeId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twitter">twitter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twoFactorEnabled">twoFactorEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.websiteUrl">websiteUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers">DataGitlabUsersUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `bio`<sup>Required</sup> <a name="bio" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.bio"></a>

```java
public java.lang.String getBio();
```

- *Type:* java.lang.String

---

##### `canCreateGroup`<sup>Required</sup> <a name="canCreateGroup" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateGroup"></a>

```java
public IResolvable getCanCreateGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `canCreateProject`<sup>Required</sup> <a name="canCreateProject" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateProject"></a>

```java
public IResolvable getCanCreateProject();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `colorSchemeId`<sup>Required</sup> <a name="colorSchemeId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.colorSchemeId"></a>

```java
public java.lang.Number getColorSchemeId();
```

- *Type:* java.lang.Number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `currentSignInAt`<sup>Required</sup> <a name="currentSignInAt" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.currentSignInAt"></a>

```java
public java.lang.String getCurrentSignInAt();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.external"></a>

```java
public IResolvable getExternal();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `externUid`<sup>Required</sup> <a name="externUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.externUid"></a>

```java
public java.lang.String getExternUid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isAdmin"></a>

```java
public IResolvable getIsAdmin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastSignInAt`<sup>Required</sup> <a name="lastSignInAt" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.lastSignInAt"></a>

```java
public java.lang.String getLastSignInAt();
```

- *Type:* java.lang.String

---

##### `linkedin`<sup>Required</sup> <a name="linkedin" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.linkedin"></a>

```java
public java.lang.String getLinkedin();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.namespaceId"></a>

```java
public java.lang.Number getNamespaceId();
```

- *Type:* java.lang.Number

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `projectsLimit`<sup>Required</sup> <a name="projectsLimit" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.projectsLimit"></a>

```java
public java.lang.Number getProjectsLimit();
```

- *Type:* java.lang.Number

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `skype`<sup>Required</sup> <a name="skype" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.skype"></a>

```java
public java.lang.String getSkype();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.themeId"></a>

```java
public java.lang.Number getThemeId();
```

- *Type:* java.lang.Number

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twitter"></a>

```java
public java.lang.String getTwitter();
```

- *Type:* java.lang.String

---

##### `twoFactorEnabled`<sup>Required</sup> <a name="twoFactorEnabled" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twoFactorEnabled"></a>

```java
public IResolvable getTwoFactorEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `websiteUrl`<sup>Required</sup> <a name="websiteUrl" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.websiteUrl"></a>

```java
public java.lang.String getWebsiteUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.internalValue"></a>

```java
public DataGitlabUsersUsers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers">DataGitlabUsersUsers</a>

---



