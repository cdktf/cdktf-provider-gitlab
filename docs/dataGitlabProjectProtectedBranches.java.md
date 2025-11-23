# `dataGitlabProjectProtectedBranches` Submodule <a name="`dataGitlabProjectProtectedBranches` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectProtectedBranches <a name="DataGitlabProjectProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches gitlab_project_protected_branches}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranches;

DataGitlabProjectProtectedBranches.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .projectId(java.lang.String)
//  .protectedBranches(IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranches>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The integer or path with namespace that uniquely identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.protectedBranches">protectedBranches</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>></code> | protected_branches block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#project_id DataGitlabProjectProtectedBranches#project_id}

---

##### `protectedBranches`<sup>Optional</sup> <a name="protectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.protectedBranches"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>>

protected_branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#protected_branches DataGitlabProjectProtectedBranches#protected_branches}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.putProtectedBranches">putProtectedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.resetProtectedBranches">resetProtectedBranches</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProtectedBranches` <a name="putProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.putProtectedBranches"></a>

```java
public void putProtectedBranches(IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranches> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.putProtectedBranches.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>>

---

##### `resetProtectedBranches` <a name="resetProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.resetProtectedBranches"></a>

```java
public void resetProtectedBranches()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectProtectedBranches resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranches;

DataGitlabProjectProtectedBranches.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranches;

DataGitlabProjectProtectedBranches.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranches;

DataGitlabProjectProtectedBranches.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranches;

DataGitlabProjectProtectedBranches.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabProjectProtectedBranches.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabProjectProtectedBranches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabProjectProtectedBranches to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabProjectProtectedBranches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectProtectedBranches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.protectedBranches">protectedBranches</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList">DataGitlabProjectProtectedBranchesProtectedBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.protectedBranchesInput">protectedBranchesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `protectedBranches`<sup>Required</sup> <a name="protectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.protectedBranches"></a>

```java
public DataGitlabProjectProtectedBranchesProtectedBranchesList getProtectedBranches();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList">DataGitlabProjectProtectedBranchesProtectedBranchesList</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `protectedBranchesInput`<sup>Optional</sup> <a name="protectedBranchesInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.protectedBranchesInput"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranches> getProtectedBranchesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectProtectedBranchesConfig <a name="DataGitlabProjectProtectedBranchesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesConfig;

DataGitlabProjectProtectedBranchesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .projectId(java.lang.String)
//  .protectedBranches(IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranches>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The integer or path with namespace that uniquely identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.protectedBranches">protectedBranches</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>></code> | protected_branches block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#project_id DataGitlabProjectProtectedBranches#project_id}

---

##### `protectedBranches`<sup>Optional</sup> <a name="protectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.protectedBranches"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranches> getProtectedBranches();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>>

protected_branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#protected_branches DataGitlabProjectProtectedBranches#protected_branches}

---

### DataGitlabProjectProtectedBranchesProtectedBranches <a name="DataGitlabProjectProtectedBranchesProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranches;

DataGitlabProjectProtectedBranchesProtectedBranches.builder()
//  .mergeAccessLevels(IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels>)
//  .pushAccessLevels(IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.property.mergeAccessLevels">mergeAccessLevels</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>></code> | merge_access_levels block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.property.pushAccessLevels">pushAccessLevels</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>></code> | push_access_levels block. |

---

##### `mergeAccessLevels`<sup>Optional</sup> <a name="mergeAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.property.mergeAccessLevels"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels> getMergeAccessLevels();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>>

merge_access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#merge_access_levels DataGitlabProjectProtectedBranches#merge_access_levels}

---

##### `pushAccessLevels`<sup>Optional</sup> <a name="pushAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.property.pushAccessLevels"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels> getPushAccessLevels();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>>

push_access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#push_access_levels DataGitlabProjectProtectedBranches#push_access_levels}

---

### DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels <a name="DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels;

DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.builder()
//  .groupId(java.lang.Number)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#group_id DataGitlabProjectProtectedBranches#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#user_id DataGitlabProjectProtectedBranches#user_id}

---

### DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels <a name="DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels;

DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.builder()
//  .deployKeyId(java.lang.Number)
//  .groupId(java.lang.Number)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.deployKeyId">deployKeyId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab deploy key allowed to perform the relevant action. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`. |

---

##### `deployKeyId`<sup>Optional</sup> <a name="deployKeyId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.deployKeyId"></a>

```java
public java.lang.Number getDeployKeyId();
```

- *Type:* java.lang.Number

The ID of a GitLab deploy key allowed to perform the relevant action.

Mutually exclusive with `group_id` and `user_id`. This field is read-only until Gitlab 17.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#deploy_key_id DataGitlabProjectProtectedBranches#deploy_key_id}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#group_id DataGitlabProjectProtectedBranches#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_protected_branches#user_id DataGitlabProjectProtectedBranches#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectProtectedBranchesProtectedBranchesList <a name="DataGitlabProjectProtectedBranchesProtectedBranchesList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranchesList;

new DataGitlabProjectProtectedBranchesProtectedBranchesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.get"></a>

```java
public DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranches> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>>

---


### DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList <a name="DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList;

new DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.get"></a>

```java
public DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>>

---


### DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference <a name="DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference;

new DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.accessLevelDescription"></a>

```java
public java.lang.String getAccessLevelDescription();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>

---


### DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference <a name="DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference;

new DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putMergeAccessLevels">putMergeAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putPushAccessLevels">putPushAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resetMergeAccessLevels">resetMergeAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resetPushAccessLevels">resetPushAccessLevels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMergeAccessLevels` <a name="putMergeAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putMergeAccessLevels"></a>

```java
public void putMergeAccessLevels(IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putMergeAccessLevels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>>

---

##### `putPushAccessLevels` <a name="putPushAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putPushAccessLevels"></a>

```java
public void putPushAccessLevels(IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putPushAccessLevels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>>

---

##### `resetMergeAccessLevels` <a name="resetMergeAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resetMergeAccessLevels"></a>

```java
public void resetMergeAccessLevels()
```

##### `resetPushAccessLevels` <a name="resetPushAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resetPushAccessLevels"></a>

```java
public void resetPushAccessLevels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.allowForcePush">allowForcePush</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.codeOwnerApprovalRequired">codeOwnerApprovalRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.mergeAccessLevels">mergeAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.pushAccessLevels">pushAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.mergeAccessLevelsInput">mergeAccessLevelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.pushAccessLevelsInput">pushAccessLevelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowForcePush`<sup>Required</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.allowForcePush"></a>

```java
public IResolvable getAllowForcePush();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `codeOwnerApprovalRequired`<sup>Required</sup> <a name="codeOwnerApprovalRequired" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.codeOwnerApprovalRequired"></a>

```java
public IResolvable getCodeOwnerApprovalRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `mergeAccessLevels`<sup>Required</sup> <a name="mergeAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.mergeAccessLevels"></a>

```java
public DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList getMergeAccessLevels();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pushAccessLevels`<sup>Required</sup> <a name="pushAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.pushAccessLevels"></a>

```java
public DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList getPushAccessLevels();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList</a>

---

##### `mergeAccessLevelsInput`<sup>Optional</sup> <a name="mergeAccessLevelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.mergeAccessLevelsInput"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels> getMergeAccessLevelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>>

---

##### `pushAccessLevelsInput`<sup>Optional</sup> <a name="pushAccessLevelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.pushAccessLevelsInput"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels> getPushAccessLevelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataGitlabProjectProtectedBranchesProtectedBranches getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>

---


### DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList <a name="DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList;

new DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.get"></a>

```java
public DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>>

---


### DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference <a name="DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_branches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference;

new DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetDeployKeyId">resetDeployKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeployKeyId` <a name="resetDeployKeyId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetDeployKeyId"></a>

```java
public void resetDeployKeyId()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.deployKeyIdInput">deployKeyIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.deployKeyId">deployKeyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.accessLevelDescription"></a>

```java
public java.lang.String getAccessLevelDescription();
```

- *Type:* java.lang.String

---

##### `deployKeyIdInput`<sup>Optional</sup> <a name="deployKeyIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.deployKeyIdInput"></a>

```java
public java.lang.Number getDeployKeyIdInput();
```

- *Type:* java.lang.Number

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `deployKeyId`<sup>Required</sup> <a name="deployKeyId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.deployKeyId"></a>

```java
public java.lang.Number getDeployKeyId();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>

---



