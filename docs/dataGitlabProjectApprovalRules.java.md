# `dataGitlabProjectApprovalRules` Submodule <a name="`dataGitlabProjectApprovalRules` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectApprovalRules <a name="DataGitlabProjectApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules gitlab_project_approval_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRules;

DataGitlabProjectApprovalRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .project(java.lang.String)
//  .approvalRules(IResolvable|java.util.List<DataGitlabProjectApprovalRulesApprovalRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or path with namespace that identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.approvalRules">approvalRules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>></code> | approval_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or path with namespace that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules#project DataGitlabProjectApprovalRules#project}

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.approvalRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules#approval_rules DataGitlabProjectApprovalRules#approval_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules">putApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetApprovalRules">resetApprovalRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApprovalRules` <a name="putApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules"></a>

```java
public void putApprovalRules(IResolvable|java.util.List<DataGitlabProjectApprovalRulesApprovalRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>>

---

##### `resetApprovalRules` <a name="resetApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetApprovalRules"></a>

```java
public void resetApprovalRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectApprovalRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRules;

DataGitlabProjectApprovalRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRules;

DataGitlabProjectApprovalRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRules;

DataGitlabProjectApprovalRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRules;

DataGitlabProjectApprovalRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabProjectApprovalRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabProjectApprovalRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabProjectApprovalRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabProjectApprovalRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectApprovalRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRules">approvalRules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList">DataGitlabProjectApprovalRulesApprovalRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRulesInput">approvalRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRules"></a>

```java
public DataGitlabProjectApprovalRulesApprovalRulesList getApprovalRules();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList">DataGitlabProjectApprovalRulesApprovalRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `approvalRulesInput`<sup>Optional</sup> <a name="approvalRulesInput" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRulesInput"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectApprovalRulesApprovalRules> getApprovalRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectApprovalRulesApprovalRules <a name="DataGitlabProjectApprovalRulesApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRulesApprovalRules;

DataGitlabProjectApprovalRulesApprovalRules.builder()
    .build();
```


### DataGitlabProjectApprovalRulesConfig <a name="DataGitlabProjectApprovalRulesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRulesConfig;

DataGitlabProjectApprovalRulesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .project(java.lang.String)
//  .approvalRules(IResolvable|java.util.List<DataGitlabProjectApprovalRulesApprovalRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or path with namespace that identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.approvalRules">approvalRules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>></code> | approval_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or path with namespace that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules#project DataGitlabProjectApprovalRules#project}

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.approvalRules"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectApprovalRulesApprovalRules> getApprovalRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules#approval_rules DataGitlabProjectApprovalRules#approval_rules}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectApprovalRulesApprovalRulesList <a name="DataGitlabProjectApprovalRulesApprovalRulesList" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRulesApprovalRulesList;

new DataGitlabProjectApprovalRulesApprovalRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get"></a>

```java
public DataGitlabProjectApprovalRulesApprovalRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectApprovalRulesApprovalRules> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>>

---


### DataGitlabProjectApprovalRulesApprovalRulesOutputReference <a name="DataGitlabProjectApprovalRulesApprovalRulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_approval_rules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference;

new DataGitlabProjectApprovalRulesApprovalRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.appliesToAllProtectedBranches">appliesToAllProtectedBranches</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.approvalsRequired">approvalsRequired</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.eligibleApproverIds">eligibleApproverIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.groupIds">groupIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.protectedBranchIds">protectedBranchIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.reportType">reportType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.userIds">userIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appliesToAllProtectedBranches`<sup>Required</sup> <a name="appliesToAllProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.appliesToAllProtectedBranches"></a>

```java
public IResolvable getAppliesToAllProtectedBranches();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `approvalsRequired`<sup>Required</sup> <a name="approvalsRequired" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.approvalsRequired"></a>

```java
public java.lang.Number getApprovalsRequired();
```

- *Type:* java.lang.Number

---

##### `eligibleApproverIds`<sup>Required</sup> <a name="eligibleApproverIds" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.eligibleApproverIds"></a>

```java
public java.util.List<java.lang.Number> getEligibleApproverIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `groupIds`<sup>Required</sup> <a name="groupIds" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.groupIds"></a>

```java
public java.util.List<java.lang.Number> getGroupIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectedBranchIds`<sup>Required</sup> <a name="protectedBranchIds" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.protectedBranchIds"></a>

```java
public java.util.List<java.lang.Number> getProtectedBranchIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.reportType"></a>

```java
public java.lang.String getReportType();
```

- *Type:* java.lang.String

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.userIds"></a>

```java
public java.util.List<java.lang.Number> getUserIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataGitlabProjectApprovalRulesApprovalRules getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>

---



