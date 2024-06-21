# `dataGitlabProjectMembership` Submodule <a name="`dataGitlabProjectMembership` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectMembership <a name="DataGitlabProjectMembership" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership gitlab_project_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembership;

DataGitlabProjectMembership.Builder.create(Construct scope, java.lang.String id)
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
//  .fullPath(java.lang.String)
//  .id(java.lang.String)
//  .inherited(java.lang.Boolean)
//  .inherited(IResolvable)
//  .projectId(java.lang.Number)
//  .query(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.fullPath">fullPath</a></code> | <code>java.lang.String</code> | The full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#id DataGitlabProjectMembership#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.inherited">inherited</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return all project members including members through ancestor groups. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.Number</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | A query string to search for members. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fullPath`<sup>Optional</sup> <a name="fullPath" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.fullPath"></a>

- *Type:* java.lang.String

The full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#full_path DataGitlabProjectMembership#full_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#id DataGitlabProjectMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inherited`<sup>Optional</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.inherited"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return all project members including members through ancestor groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#inherited DataGitlabProjectMembership#inherited}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.projectId"></a>

- *Type:* java.lang.Number

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#project_id DataGitlabProjectMembership#project_id}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.query"></a>

- *Type:* java.lang.String

A query string to search for members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#query DataGitlabProjectMembership#query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetFullPath">resetFullPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetInherited">resetInherited</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFullPath` <a name="resetFullPath" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetFullPath"></a>

```java
public void resetFullPath()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetId"></a>

```java
public void resetId()
```

##### `resetInherited` <a name="resetInherited" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetInherited"></a>

```java
public void resetInherited()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetQuery"></a>

```java
public void resetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembership;

DataGitlabProjectMembership.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembership;

DataGitlabProjectMembership.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembership;

DataGitlabProjectMembership.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembership;

DataGitlabProjectMembership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabProjectMembership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabProjectMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabProjectMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabProjectMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.members">members</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList">DataGitlabProjectMembershipMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fullPathInput">fullPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.inheritedInput">inheritedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fullPath">fullPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.inherited">inherited</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.projectId">projectId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.members"></a>

```java
public DataGitlabProjectMembershipMembersList getMembers();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList">DataGitlabProjectMembershipMembersList</a>

---

##### `fullPathInput`<sup>Optional</sup> <a name="fullPathInput" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fullPathInput"></a>

```java
public java.lang.String getFullPathInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inheritedInput`<sup>Optional</sup> <a name="inheritedInput" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.inheritedInput"></a>

```java
public java.lang.Object getInheritedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.projectIdInput"></a>

```java
public java.lang.Number getProjectIdInput();
```

- *Type:* java.lang.Number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fullPath"></a>

```java
public java.lang.String getFullPath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.inherited"></a>

```java
public java.lang.Object getInherited();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.projectId"></a>

```java
public java.lang.Number getProjectId();
```

- *Type:* java.lang.Number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectMembershipConfig <a name="DataGitlabProjectMembershipConfig" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembershipConfig;

DataGitlabProjectMembershipConfig.builder()
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
//  .fullPath(java.lang.String)
//  .id(java.lang.String)
//  .inherited(java.lang.Boolean)
//  .inherited(IResolvable)
//  .projectId(java.lang.Number)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.fullPath">fullPath</a></code> | <code>java.lang.String</code> | The full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#id DataGitlabProjectMembership#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.inherited">inherited</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return all project members including members through ancestor groups. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.projectId">projectId</a></code> | <code>java.lang.Number</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.query">query</a></code> | <code>java.lang.String</code> | A query string to search for members. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fullPath`<sup>Optional</sup> <a name="fullPath" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.fullPath"></a>

```java
public java.lang.String getFullPath();
```

- *Type:* java.lang.String

The full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#full_path DataGitlabProjectMembership#full_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#id DataGitlabProjectMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inherited`<sup>Optional</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.inherited"></a>

```java
public java.lang.Object getInherited();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return all project members including members through ancestor groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#inherited DataGitlabProjectMembership#inherited}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.projectId"></a>

```java
public java.lang.Number getProjectId();
```

- *Type:* java.lang.Number

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#project_id DataGitlabProjectMembership#project_id}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

A query string to search for members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/project_membership#query DataGitlabProjectMembership#query}

---

### DataGitlabProjectMembershipMembers <a name="DataGitlabProjectMembershipMembers" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembershipMembers;

DataGitlabProjectMembershipMembers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectMembershipMembersList <a name="DataGitlabProjectMembershipMembersList" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembershipMembersList;

new DataGitlabProjectMembershipMembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.get"></a>

```java
public DataGitlabProjectMembershipMembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectMembershipMembersOutputReference <a name="DataGitlabProjectMembershipMembersOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_membership.DataGitlabProjectMembershipMembersOutputReference;

new DataGitlabProjectMembershipMembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembers">DataGitlabProjectMembershipMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectMembershipMembers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembers">DataGitlabProjectMembershipMembers</a>

---



